
import './App.css';
import React from "react";
import {  Routes, Route,  } from "react-router-dom";
import Header from './Components/Header/Header';
import Discover from  './Pages/Discover/Discover.js'
import Marketplace from  './Pages/Marketplace/Marketplace.js'
import Resources from  './Pages/Resources/Resources.js'
import Stats from  './Pages/Stats/Stats.js'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Discover" element={<Discover />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Stats" element={<Stats />} />
      </Routes>
    </div>
  );
}

export default App;
