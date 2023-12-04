import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

dotenv.config(); //env file

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(morgan('dev'));

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  { id: 1, name: 'Earth' },
  { id: 2, name: 'Mars' },
  { id: 3, name: 'Jupiter' },
];

const planetSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().min(1).required(),
});

const validatePlanet = (req: Request, res: Response, next: NextFunction): void => {
    const { error } = planetSchema.validate(req.body);
    if (error) {
      return next(new Error(error.details[0].message));
    }
    next(); // Let the next function handle the response
  };
  
app.get('/api/planets', (req, res) => {
  res.status(200).json(planets);
});

app.get('/api/planets/:id', (req, res) => {
  const { id } = req.params;
  const planet = planets.find(p => p.id === parseInt(id));
  res.status(200).json(planet);
});

app.post('/api/planets', validatePlanet, (req, res) => {
  const newPlanet = {
    id: req.body.id,
    name: req.body.name
  };
  planets.push(newPlanet);
  res.status(201).json({ msg: 'Planet created successfully' });
});

app.put('/api/planets/:id', validatePlanet, (req, res) => {
  const { id } = req.params;
  const updatedPlanet = req.body;
  const index = planets.findIndex(p => p.id === parseInt(id));
  planets[index] = updatedPlanet;
  res.status(200).json({ msg: 'Planet updated successfully' });
});

app.delete('/api/planets/:id', (req, res) => {
  const { id } = req.params;
  const index = planets.findIndex(p => p.id === parseInt(id));
  planets.splice(index, 1);
  res.status(200).json({ msg: 'Planet deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
