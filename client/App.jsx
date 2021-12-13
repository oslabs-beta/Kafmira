import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import BarChart from './components/BarChart';
import PortEntry from './components/PortEntry';

const App =() => {
  return (
  
    <div>
      <div><BarChart /></div>
      <div><PortEntry /></div>
      <Routes>
        
      </Routes>
    </div>



  )
}

export default App;