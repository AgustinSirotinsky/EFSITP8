//React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";

//css
import './App.css';

//Routes
import Home from './components/routes/Home';
import Quiz from './components/routes/Quiz';
import HighScore from './components/routes/Highschore';
import Layout from './components/routes/Layout';

export default function App() {
  return (
    <div className='App'>
      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/highschore" element={<HighScore />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}




