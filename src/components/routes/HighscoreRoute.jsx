//React
import React from 'react';
import { HighScoreContext } from '../../context/HighScoreContext';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Routes
import User from './User';

const HighScoreRoute = () => {
    const {highScore} = React.useContext(HighScoreContext);

    return (
    <div className="Home" style={{color:"white"}}>
        <h1>Puntuacion mas alta:</h1>
        <h1>{highScore}</h1>
    </div>
    )
}

export default HighScoreRoute;