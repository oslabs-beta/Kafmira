import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import PortEntry from './components/PortEntry.jsx';
import GetLogo from './components/GetLogo.jsx';
import MainPageContainer from './components/MainPageContainer.jsx';
import BottomBanner from './components/BottomBanner.jsx';
import ClusterContainer from './components/ClusterContainer.jsx';

const App =() => {
  return (
  
    <div>
      <div><GetLogo /></div>
      <div><PortEntry /></div>
      <div><BottomBanner /></div>
      <div><ClusterContainer /></div>
      <Routes>
        <Route path='/dashboard' element={<MainPageContainer />} />
      </Routes>

    </div>



  )
}

export default App;