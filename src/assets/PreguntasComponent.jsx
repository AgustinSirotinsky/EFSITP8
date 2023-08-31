import React, { useState } from 'react';
import preguntas from './preguntas.json'

function PreguntasComponent() {
const [preguntaIndex, setPreguntaIndex] = useState(0);
const [respuestaElegida, setRespuestaElegida] = useState(null);
const [mostrarJustificacion, setMostrarJustificacion] = useState(false);

const preguntaActual = preguntas[preguntaIndex];
const respuestas = preguntaActual.respuestas;

const handleRespuestaClick = (opcion) => {
    setRespuestaElegida(opcion);
    setMostrarJustificacion(true);
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
            Respuesta correcta: {preguntaActual.respuesta_correcta}
        </p>
        <p>Justificación: {preguntaActual.justificacion}</p>
        <button onClick={handleSiguientePregunta}>Siguiente pregunta</button>
        </div>
    )}
    </div>
);
}

export default PreguntasComponent;
