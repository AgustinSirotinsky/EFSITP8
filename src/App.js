import logo from './logo.svg';
import './App.css';

//React
import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";

//Bootsrap
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

//Routes
import Home from './components/routes/Home';
import Quiz from './components/routes/Quiz';

//Other
import casita from './casita.png'

export default function App() {
  return (
    <div className='App'>
      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href='/'><img src={casita} alt="casita" width={'50px'} height={'50px'}></img></Navbar.Brand>
      </Container>
    </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}




