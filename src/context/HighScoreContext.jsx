import React from 'react';

export const HighScoreContext = React.createContext();

const HighScoreProvider = (props) => {
    const [highScore, setHighScore] = React.useState([]);

    return <HighScoreContext.Provider value={{highScore, setHighScore}}>{props.children}</HighScoreContext.Provider>
}

export default HighScoreProvider;


