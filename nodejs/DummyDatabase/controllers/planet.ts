import Joi from "joi";
import { Request, Response, NextFunction } from 'express';

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

const getAll = (req:Request, res:Response) => {
    res.status(200).json(planets);
  }
const getOneById = (req:Request, res:Response) => {
    const { id } = req.params;
    const planet = planets.find(p => p.id === parseInt(id));
    res.status(200).json(planet);
  }
const create = (req:Request, res:Response) => {
    const newPlanet = {
      id: req.body.id,
      name: req.body.name
    };
    planets.push(newPlanet);
    res.status(201).json({ msg: 'Planet created successfully' });
  }
const updateById = (req:Request, res:Response) => {
    const { id } = req.params;
    const updatedPlanet = req.body;
    const index = planets.findIndex(p => p.id === parseInt(id));
    planets[index] = updatedPlanet;
    res.status(200).json({ msg: 'Planet updated successfully' });
  }
const deleteById = (req:Request, res:Response) => {
    const { id } = req.params;
    const index = planets.findIndex(p => p.id === parseInt(id));
    planets.splice(index, 1);
    res.status(200).json({ msg: 'Planet deleted successfully' });
  }

  export {getAll,getOneById,create,updateById,deleteById}