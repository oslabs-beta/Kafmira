import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import BarChart from './components/BarChart';
import PortEntry from './components/PortEntry';
import GetLogo from './components/GetLogo';

const App =() => {
  return (
  
    <div>
      <div><BarChart /></div>
      <div><GetLogo /></div>
      <div><PortEntry /></div>
      <Routes>
        
      </Routes>
    </div>



  )
}

export default App;