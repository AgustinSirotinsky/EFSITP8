//React
import React from 'react';
import { HighScoreContext } from '../../context/HighScoreContext';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const HighScoreRoute = () => {
    const {highScore} = React.useContext(HighScoreContext);
    return (
    <div className="Home" style={{color:"white"}}>
        {console.log(highScore)}
        <h1>Puntuacion mas alta:</h1>
    </div>
    )
}

export default HighScoreRoute;