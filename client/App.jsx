import React, { Component } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import MainPageContainer from './components/MainPageContainer.jsx';
import BottomBanner from './components/BottomBanner.jsx';
import MakeMetrics from './components/CriticalMetrics.jsx'; 
const App =() => {
  return (
  
    <div>
     

      <div><GetLogo /></div>
      <div><MakeMetrics/></div>
      <MainPageContainer />
      <div><PortEntry /></div>
      <div><OutlinedCard/></div>
      <div><BottomBanner /></div>
      {/* <div><ClusterContainer /></div> */}
      <Routes>
        <Route path='/dashboard/*' element={<MainPageContainer />} />
        <Route path='/brokers/*' element={<BrokersPage />} />
        <Route path='/producers/*' element={<ProducersPage />} />
        <Route path='/consumers/*' element={<ConsumersPage />} />
        <Route path='/' exact element={<LandingPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App;