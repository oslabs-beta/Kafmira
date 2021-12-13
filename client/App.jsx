import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import BarChart from './components/BarChart';
import MainPageContainer from './components/MainPageContainer.jsx'
import GetLogo from '../components/GetLogo';

const App =() => {
  return (
  
    <div>
      <MainPageContainer />
      
      <div>This is a react component DAWG</div>
      <div>Further testing of dev tools</div>
      <div><GetLogo /></div>
      <Routes>
        
      </Routes>
    
    </div>



  )
}

export default App;