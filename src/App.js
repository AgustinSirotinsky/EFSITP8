//React
import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";

//Bootsrap
import { Navbar, Nav } from 'react-bootstrap';

//css
import './App.css';

//Routes
import Home from './components/routes/Home';
import Quiz from './components/routes/Quiz';
import HighScore from './components/routes/Highschore';

//Other
import casita from './casita.png'
import highschore from './highschore.png'

export default function App() {
  return (
    <div className='App'>
      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>
    <BrowserRouter>
      <Navbar className="bg-body-tertiary">
          <Navbar.Brand href="/">
            <img src={casita} width="50" height="50" alt="home"/>
          </Navbar.Brand>
          <Navbar.Brand href="/highSchore">
            <img src={highschore} width="75" height="50" alt="highschore"/>
          </Navbar.Brand>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/highschore" element={<HighScore />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}




