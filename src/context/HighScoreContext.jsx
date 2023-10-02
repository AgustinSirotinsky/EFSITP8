import React, { useEffect } from 'react';

export const HighScoreContext = React.createContext();

const HighScoreProvider = (props) => {
    const [highScore, setHighScore] = React.useState(() => {
        // Initialize highScore from LocalStorage or set to an empty array if it doesn't exist
        const storedHighScore = localStorage.getItem('highScore');
        return storedHighScore ? JSON.parse(storedHighScore) : [];
    });

    useEffect(() => {
        // Update LocalStorage whenever highScore changes
        localStorage.setItem('highScore', JSON.stringify(highScore));
    }, [highScore]);

    return (
        <HighScoreContext.Provider value={{ highScore, setHighScore }}>
            {props.children}
        </HighScoreContext.Provider>
    );
}

export default HighScoreProvider;