import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, TextField, Typography, Button } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { addPortAction, addConnectionTimeAction } from '../actions/action.js';
import { connect } from 'react-redux';
import PortEntry from './PortEntry.jsx';
import GetLogo from './GetLogo.jsx';
import BottomBanner from './BottomBanner.jsx';

const mapStateToProps = (state) => {
  return {
    port: state.mainReducer.port
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPortAction: (userInput) => {
      dispatch(addPortAction(userInput));
    },
    addConnectionTimeAction: (timestamp) => {
      dispatch(addConnectionTimeAction(timestamp));
    }
  };
};

//If JMX exporter is configured correctly on Kafka instance, port verification will save port and connection time to Redux store; else redirection to Port Error page

const verifyPort = async (port) => {
  let valid = false;
  const url = `http://localhost:${port}/api/v1/query?query=up`;
  await fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') valid = true;
    })
    .catch(err => console.log(err));
  return valid;
};

function PortEntryError(props){
  const [port, setPort] = useState('');
  const [portError, setPortError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPortError(false);
    const userPort = document.getElementById('prometheus').value;
    const verified = await verifyPort(userPort);
    const timestamp = new Date().toISOString();
    if (verified) {
      props.addPortAction(userPort);
      props.addConnectionTimeAction(timestamp);
      navigate("/dashboard");
    }
    else if(!verified){
      setPortError(true);
      console.log('Missing and/or incorrect port; please enter and resubmit');
    };
  };

  return(
    <div style= {{height: '100vh', display: 'flex', flexDirection: 'column' , justifyContent: 'space-between', backgroundImage: 'linear-gradient(to bottom left, #66a6ff, #89f7fe)'}}>
    <div style ={{marginTop: '15vh', display: 'flex', justifyContent: 'center'}}><GetLogo /></div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <Alert variant="filled" severity="error" style={{maxWidth: '25vw'}}>
    <AlertTitle>Connection Error</AlertTitle>
    Missing port and/or port connection failed — <strong>please try again</strong>
    </Alert>
    </div>
    <div><PortEntry /></div>
    <div><BottomBanner /></div>
  </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(PortEntryError);