import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config(); //env file

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(morgan('dev'));

type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

let planets: Planets = [
    {
        id:1,
        name:'Earth'
    },
    {
        id:2,
        name:'Mars'
    },
]

app.get('/', (req,res) => {
    res.send('Express app dummy database')
})

app.get('/planets', (req,res) => {
    res.json(planets);
})

app.listen(PORT, () => {
    console.log('Server running on Port-3003')
})