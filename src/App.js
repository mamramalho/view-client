import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import Contact from './pages/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
