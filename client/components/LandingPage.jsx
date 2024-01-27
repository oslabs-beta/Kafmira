import React, { Component } from 'react';
import PortEntry from './PortEntry.jsx';
import GetLogo from './GetLogo.jsx';
import BottomBanner from './BottomBanner.jsx';


const LandingPage =() => {
  return (
    <div style= {{height: '100vh', display: 'flex', flexDirection: 'column' , justifyContent: 'space-between', backgroundImage: 'linear-gradient(to bottom left, #66a6ff, #89f7fe)'}}>
      <div style ={{marginTop: '15vh', display: 'flex', justifyContent: 'center'}}><GetLogo /></div>
      <div><PortEntry /></div>
      <div><BottomBanner /></div>
    </div>
  )
}

export default LandingPage;