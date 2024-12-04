import express from 'express';
import cors from 'cors';
import { db } from './drizzle';
import { eq } from "drizzle-orm";
import { cursos, users} from './drizzle/schema';
import { z } from 'zod'

const app = express();
const port = 3002;

app.use(cors({
  origin: 'http://localhost:3001',
}))

app.get('/', async (req, res) => {
  res.json({"message":"Un saludo al pirata de culiacan"})
});

app.get('/cursos', async (req, res) => {
  const queryValidator = z.string().regex(/\d/)
  let { category } = req.query
  const queryParameter = queryValidator.safeParse(category)
  console.log( queryParameter.data )
  try {
    let query = db.select({
      id: cursos.id,
      name: cursos.name,
      category: cursos.categoryId,
      urlThumbnail: cursos.urlThumbnail,
      instructor: users.name,
      price: cursos.price,
    }).from(cursos).innerJoin(users, eq(cursos.authorId,users.id))

    if (queryParameter.data) {
      query.where(eq(cursos.categoryId,Number(queryParameter.data)))
    }

    const getCursos = await query 
    res.json(getCursos)
  }catch (e) {
    console.log(e)
  }
})

app.get('/cursos/:id', async (req,res) => {
  const { id } = req.params
  try{
    const getCursoId = await db.select({
      id: cursos.id,
      name: cursos.name,
      description: cursos.description,
      instructor: users.name,
      price: cursos.price,
      urlTrailer: cursos.urlTrailer,
    }).from(cursos)
      .innerJoin(users,eq(cursos.authorId, users.id))
      .where(eq(cursos.id,Number(id)))
    if (getCursoId) {
      res.json(getCursoId[0])
    }
    else{
      res.status(404)
    }
  }catch (e) {
    console.log(e)
    res.status(500)
  }
})


app.listen(port, () =>{
  console.log(`El servidor esta corriend en el puerto ${{port}}`)
})