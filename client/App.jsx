import React, { Component } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import MainPageContainer from './components/MainPageContainer.jsx';
import BrokersPage from './components/BrokersPage.jsx'
import ConsumersPage from './components/ConsumersPage.jsx'
import ProducersPage from './components/ProducersPage.jsx'
import LandingPage from './components/LandingPage.jsx';

const App =() => {
  return (
    <HashRouter>
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