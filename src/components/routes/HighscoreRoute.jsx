//React
import React from 'react';

//Context
import { HighScoreContext } from '../../context/HighScoreContext';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const HighScoreRoute = () => {
    const { highScore } = React.useContext(HighScoreContext);
    const { setHighScore } = React.useContext(HighScoreContext);
    console.log(highScore)

    const clearHighScores = () => {
        // Clear the highScore array by setting it to an empty array
        setHighScore([]);
    };
    const sortedHighScore = [...highScore].sort((a, b) => b.puntos - a.puntos);
    return (
        
        <div className="Home" style={{ color: "white" }}>
            <h1>Puntuación más alta:</h1>
            <ul>
                {sortedHighScore.map((score, index) => (
                    <li key={index}>
                        {score.usuario} : {score.puntos}
                    </li>
                ))}
            </ul>
            <Button variant="danger" onClick={clearHighScores}>
                Eliminar todas las puntuaciones
            </Button>
        </div>
    );
}

export default HighScoreRoute;