import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/preguntas`)    
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
