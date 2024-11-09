import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './components/Navbar';
import Proviz from './components/Proviz';
import Offer from './components/Offer';
import Modal from './components/Model';
import ApplicationForm from './components/Form';

const App = () => {
  

  return (
    <Router>
      <Navbar />
    
        
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Proviz" element={<Proviz />} />
        <Route exact path="/Offer" element={<Offer />} />
        
        
      </Routes>
     
    </Router>
  );
};

export default App;
