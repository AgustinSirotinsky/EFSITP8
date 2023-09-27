//React
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { HighScoreContext } from "../../context/HighScoreContext";

//Bootstrap
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

//css
import '../Quiz.css'

//Other
import preguntas from '../preguntas.json'

function PreguntasComponent() {

    //Shuffle de array
// useEffect(() => {
//     for (let i = preguntas.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [preguntas[i], preguntas[j]] = [preguntas[j], preguntas[i]];
//     }
//     console.log(preguntas)
// },[])

const {highScore} = React.useContext(HighScoreContext);
const {sethighScore} = React.useContext(HighScoreContext);

const primeraPreg = Math.floor(Math.random() * preguntas.length);
const [preguntaIndex, setPreguntaIndex] = useState(primeraPreg);
const [preguntasSalieron, setPreguntasSalieron ] = useState([primeraPreg]);


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
    if (preguntaActual.respuesta_correcta===opcion){
        setAvanzar(true)
    }
    else {
        setReiniciar(true)
    }
};

const handleSiguientePregunta = () => {
    setPuntos(puntos+1);
    if (puntos>highScore){
        highScore=puntos
        sethighScore(puntos)
    }

    let siguientePregunta = Math.floor(Math.random() * preguntas.length);
    while (preguntasSalieron.indexOf(siguientePregunta) !== -1) {
        siguientePregunta = Math.floor(Math.random() * preguntas.length);
    }
    setPreguntaIndex(siguientePregunta);
    setPreguntasSalieron([...preguntasSalieron, siguientePregunta])

    setRespuestaElegida(null);
    setMostrarJustificacion(false);
};

return (
    <div style={{color:"white"}}>
        <div className="pregunta">
            <h1>Pregunta {puntos+1}</h1>
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
