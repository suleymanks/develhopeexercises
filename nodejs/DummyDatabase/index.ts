import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { getAll,getOneById,create,updateById,deleteById } from './controllers/planet';

dotenv.config(); //env file

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(morgan('dev'));
  
app.get('/api/planets',getAll );

app.get('/api/planets/:id',getOneById );

app.post('/api/planets',create );

app.put('/api/planets/:id',updateById );

app.delete('/api/planets/:id',deleteById );

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
