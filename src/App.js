import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const headers = {
    'X-Meteum-API-Key': '68820936-c4bf-46a9-b538-f26b61469509'
  };
  useEffect(() => {
  fetch('https://api.meteum.ai/v1/forecast?lat=52.37125&lon=4.89388', { headers })
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
  }, []);
  return (
    <div>
    <h1>hello</h1>
  </div>
  );
}

export default App;
