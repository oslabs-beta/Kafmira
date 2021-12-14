import React, { Component } from 'react';
import PortEntry from './PortEntry.jsx';
import GetLogo from './GetLogo.jsx';
import BottomBanner from './BottomBanner.jsx';


const LandingPage =() => {
  return (
    <div>
      <div><GetLogo /></div>
      <div><PortEntry /></div>
      <div><BottomBanner /></div>
    </div>
  )
}

export default LandingPage;