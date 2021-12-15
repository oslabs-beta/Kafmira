import React  from 'react';
import logo from './../../logo/KafmiraLogoFin.png'


const GetLogo = () => {

  return (
  <div className='logo'>
    <img src={logo} width="150" height="150"/>
    <h2>Kafmira</h2>
  </div>
  )
};

export default GetLogo