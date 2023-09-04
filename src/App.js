//React
import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";

//Bootsrap
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

//css
import './App.css';

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
      <Navbar className="bg-body-tertiary">
          <Navbar.Brand href="/">
            <img src={casita} width="50" height="50" alt="home"/>
          </Navbar.Brand>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}




