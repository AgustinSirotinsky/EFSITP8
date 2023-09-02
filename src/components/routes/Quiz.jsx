import React, { useState } from 'react';
import preguntas from '../preguntas.json'
import { Link } from "react-router-dom";


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
    <div>
    <h1>Pregunta {preguntaIndex + 1}</h1>
    <p>{preguntaActual.pregunta}</p>
    <div>
        {Object.keys(respuestas).map((opcion) => (
        <button
            key={opcion}
            onClick={() => handleRespuestaClick(opcion)}
            disabled={respuestaElegida !== null}
        >
            {respuestas[opcion]}
        </button>
        ))}
    </div>
    {mostrarJustificacion && (
        <div>
        <p>
            Respuesta correcta: {preguntaActual.respuestas[preguntaActual.respuesta_correcta]}
        </p>
        <p>Justificación: {preguntaActual.justificacion}</p>
        {avanzar && (
        <button onClick={handleSiguientePregunta}>Siguiente pregunta</button>
        )}
        {reiniciar && (
        <>
            <p>Tus puntos: {puntos}</p>
            <Link to="/"><button>Reiniciar</button></Link>
        </>
        )}
        </div>
    )}
    </div>
);
}

export default PreguntasComponent;
