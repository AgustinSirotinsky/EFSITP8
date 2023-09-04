//React
import { Link } from "react-router-dom";
import React, { useState } from 'react';

//Bootstrap
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

//css
import '../Quiz.css'

//Other
import preguntas from '../preguntas.json'

function PreguntasComponent() {
const [preguntaIndex, setPreguntaIndex] = useState(0);
const [respuestaElegida, setRespuestaElegida] = useState(null);
const [mostrarJustificacion, setMostrarJustificacion] = useState(false);
const [reiniciar, setReiniciar] = useState(false)
const [avanzar, setAvanzar] = useState(false)
const [puntos, setPuntos] = useState(0);

const preguntaActual = preguntas[preguntaIndex];
const respuestas = preguntaActual.respuestas;

console.log(preguntas[4])

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
    <div style={{color:"white"}}>
        <div className="pregunta">
            <h1>Pregunta {preguntaIndex}</h1>
            <h2>{preguntaActual.pregunta}</h2>
        </div>
    <div className="opciones">
        {Object.keys(respuestas).map((opcion) => (
        <Button
            key={opcion}
            variant="outline-primary"
            onClick={() => handleRespuestaClick(opcion)}
            disabled={respuestaElegida !== null}
            size="lg"
        >
            {respuestas[opcion]}
        </Button>
        ))}
    </div>
    <br/>
    {mostrarJustificacion && (
        <div>
        {avanzar && (
            <Alert variant="success">
                <Alert.Heading><h2>Respuesta correcta: {preguntaActual.respuestas[preguntaActual.respuesta_correcta]}</h2></Alert.Heading>
                    <h3>
                        {preguntaActual.justificacion}
                    </h3>
                <hr />
                <p className="mb-0">
                <Button onClick={handleSiguientePregunta} variant="outline-success" size="lg">Siguiente pregunta</Button>
                </p>
            </Alert>
        )}
        {reiniciar && (
            <Alert variant="danger">
                <Alert.Heading><h2>Respuesta correcta: {preguntaActual.respuestas[preguntaActual.respuesta_correcta]}</h2></Alert.Heading>
                    <h4>{preguntaActual.justificacion}</h4>
                    <h5>Tus puntos: {puntos}</h5>
                <hr />
                <p className="mb-0">
                <Link to="/"><Button variant="outline-danger" size="lg">Reiniciar</Button></Link>
                </p>
            </Alert>
        )}
        </div>
    )}
    </div>
);
}

export default PreguntasComponent;
