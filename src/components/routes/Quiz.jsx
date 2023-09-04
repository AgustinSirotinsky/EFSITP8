//React
import { Link } from "react-router-dom";
import React, { useState } from 'react';

//Other
import preguntas from '../preguntas.json'

//Bootstrap
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function PreguntasComponent() {
const [preguntaIndex, setPreguntaIndex] = useState(0);
const [respuestaElegida, setRespuestaElegida] = useState(null);
const [mostrarJustificacion, setMostrarJustificacion] = useState(false);
const [reiniciar, setReiniciar] = useState(false)
const [avanzar, setAvanzar] = useState(false)
const [puntos, setPuntos] = useState(0);

const preguntaActual = preguntas[preguntaIndex];
const respuestas = preguntaActual.respuestas;

const handleRespuestaClick = (opcion) => {
    setAvanzar(false)
    setRespuestaElegida(opcion);
    setMostrarJustificacion(true);
    if (preguntaActual.respuesta_correcta==opcion){
        setAvanzar(true)
        setPuntos(puntos+1);
    }
    else {
        setReiniciar(true)
    }
};

const handleSiguientePregunta = () => {
    if (preguntaIndex < preguntas.length - 1) {
    setPreguntaIndex(preguntaIndex + 1);
    setRespuestaElegida(null);
    setMostrarJustificacion(false);
    }
};

return (
    <div className="Quiz">
    <h1>Pregunta {preguntaIndex + 1}</h1>
    <p>{preguntaActual.pregunta}</p>
    <div>
        {Object.keys(respuestas).map((opcion) => (
        <Button
            key={opcion}
            onClick={() => handleRespuestaClick(opcion)}
            disabled={respuestaElegida !== null}
        >
            {respuestas[opcion]}
        </Button>
        ))}
    </div>
    {mostrarJustificacion && (
        <div>
        <p>
            Respuesta correcta: {preguntaActual.respuestas[preguntaActual.respuesta_correcta]}
        </p>
        <p>Justificación: {preguntaActual.justificacion}</p>
        {avanzar && (
        <Button onClick={handleSiguientePregunta} variant="success">Siguiente pregunta</Button>
        )}
        {reiniciar && (
        <>
            <p>Tus puntos: {puntos}</p>
            <Link to="/"><Button variant="danger">Reiniciar</Button></Link>
        </>
        )}
        </div>
    )}
    </div>
);
}

export default PreguntasComponent;
