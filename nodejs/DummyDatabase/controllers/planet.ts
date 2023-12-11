// import { pgPromise } from 'pg-promise';



// const getAll = (req: Request, res: Response) => {
//   const planets = db.many(`SELECT * FROM planets;`)
//   res.status(200).json(planets);
// }
// const getOneById = (req: Request, res: Response) => {
//   const { id } = req.params;
//   const planets = db.oneOrNone(`SELECT * FROM planets WHERE id=$1;`, Number(id))
//   res.status(200).json(planets);
// }
// const create = (req: Request, res: Response) => {
//   const { name } = req.body
//   const newPlanet = { name };
//   const validatedNewPlanet = planetSchema.validate(newPlanet)
//   if(validatedNewPlanet.error) {
//     return res.status(400).json({msg: "error while creating"})
//   } else {
//     db.none(`INSERT INTO planets (name) VALUES ($1)`, name)
//     res.status(201).json({ msg: 'Planet created successfully' });
//   }
// }
// const updateById = (req: Request, res: Response) => {
//   const { id } = req.params;
//   const updatedPlanet = req.body;
//   db.none(`UPDATE planets WHERE id=$2 SET name=$1`, [updatedPlanet,id])
//   res.status(200).json({ msg: 'Planet updated successfully' });
// }
// const deleteById = (req: Request, res: Response) => {
//   const { id } = req.params;
//   db.none(`DELETE FROM planets WHERE id=$1`, Number(id))
//   res.status(200).json({ msg: 'Planet deleted successfully' });
// }

// export { getAll, getOneById, create, updateById, deleteById }