import express from "express";
import bodyParser from "body-parser"
import cors from 'cors'
import jwtservice from "./middleware/middleware.js"

import PreguntasService from './src/services/preguntasservice.js'
import RespuestaService from "./src/services/respuestasservice.js";

const svcP=new PreguntasService();
const svcR=new RespuestaService();

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
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

app.get('/preguntas/:id',async (req,res) =>{
    const PreguntasGetById = await svcP.getById(req.params['id']);
    if (PreguntasGetById.length == 0) {
        return res.status(404).send('Pregunta inexistente')
    } else {
        return res.status(200).json(PreguntasGetById)
    }
})

app.get('/respuestas',async (req,res) =>{
    const RespuestasGetAll = await svcR.getAll();
    return res.status(200).json(RespuestasGetAll) 
})

app.get('/respuestas/:id',async (req,res) =>{
    const RespuestasGetByPregunta = await svcR.getByPregunta(req.params['id']);
    if (RespuestasGetByPregunta.length == 0) {
        return res.status(404).send('Pregunta inexistente')
    } else {
        return res.status(200).json(RespuestasGetByPregunta)
    }
})

app.listen(port,()=> {
    console.log(`Pagina abierte en el puerto ${port}`)
})