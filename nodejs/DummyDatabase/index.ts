import pgPromise from 'pg-promise';
import express from 'express';
import dotenv from 'dotenv';
import Joi from "joi";
import { Request, Response } from 'express';
import morgan from 'morgan';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

const db = pgPromise()("postgres://:963852@localhost:5432/video")

const planetSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().min(1).required(),
});

app.use(express.json());
app.use(morgan('dev'));
  
app.get('/api/planets',(req: Request, res: Response) => {
  const planets = db.many(`SELECT * FROM planets;`)
  res.status(200).json(planets);
} );

app.get('/api/planets/:id',(req: Request, res: Response) => {
  const { id } = req.params;
  const planets = db.oneOrNone(`SELECT * FROM planets WHERE id=$1;`, Number(id))
  res.status(200).json(planets);
} );

app.post('/api/planets',(req: Request, res: Response) => {
  const { name } = req.body
  const newPlanet = { name };
  const validatedNewPlanet = planetSchema.validate(newPlanet)
  if(validatedNewPlanet.error) {
    return res.status(400).json({msg: "error while creating"})
  } else {
    db.none(`INSERT INTO planets (name) VALUES ($1)`, name)
    res.status(201).json({ msg: 'Planet created successfully' });
  }
} );

app.put('/api/planets/:id',(req: Request, res: Response) => {
  const { id } = req.params;
  const updatedPlanet = req.body;
  db.none(`UPDATE planets SET name=$1 WHERE id=$2`, [updatedPlanet.name,id])
  res.status(200).json({ msg: 'Planet updated successfully' });
} );

app.delete('/api/planets/:id',(req: Request, res: Response) => {
  const { id } = req.params;
  db.none(`DELETE FROM planets WHERE id=$1`, Number(id))
  res.status(200).json({ msg: 'Planet deleted successfully' });
} );

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
