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
      <MainPageContainer />
      <div><PortEntry /></div>
      <div><BottomBanner /></div>
      {/* <div><ClusterContainer /></div> */}
      <Routes>
        <Route path='/dashboard' element={<MainPageContainer />} />
        {/* <Route path='/brokers' element={<BrokersPage />} />
        <Route path='/producers' element={<ProducersPage />} />
        <Route path='/consumers' element={<ConsumersPage />} />
        <Route path='/portentry' element={<App />} /> */}
      </Routes>

    </div>



  )
}

export default App;