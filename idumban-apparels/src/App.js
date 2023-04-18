import React from 'react';
import './App.scss';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
