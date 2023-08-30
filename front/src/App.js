import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './assets/Home';
import Quiz from './assets/Quiz';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </BrowserRouter>
  );
}




