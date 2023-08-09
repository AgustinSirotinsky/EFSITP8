import express from "express";
import bodyParser from "body-parser"
import cors from 'cors'
import jwtservice from "./middleware/middleware.js"

import PreguntasService from './src/services/preguntasservice.js'

const svcP=new PreguntasService();

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;
const auth = new jwtservice()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req,res)=>{
    res.send('cool');
})

app.get('/preguntas',async (req,res) =>{
    const PreguntasGetAll = await svcP.getAll();
    return res.status(200).json(PreguntasGetAll)
})

app.listen(port,()=> {
    console.log(`Pagina abierte en el puerto ${port}`)
})