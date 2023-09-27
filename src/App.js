//React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";
import UserProvider from './context/HighScoreContext';

//css
import './App.css';

//Routes
import Home from './components/routes/Home';
import Quiz from './components/routes/Quiz';
import HighscoreRoute from './components/routes/HighscoreRoute';
import Layout from './components/routes/Layout';

export default function App() {
  return (
    <UserProvider>
      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/HighscoreRoute" element={<HighscoreRoute />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}




