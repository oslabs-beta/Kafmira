import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import PortEntry from './components/PortEntry.jsx';
import GetLogo from './components/GetLogo.jsx';
import MainPageContainer from './components/MainPageContainer.jsx';

const App =() => {
  return (
  
    <div>
      <div><GetLogo /></div>
      <div><PortEntry /></div>
      <Routes>
      <Route path='/dashboard' element={<MainPageContainer />} />
      </Routes>
    
    </div>



  )
}

export default App;