import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, TextField, Typography, Button } from '@material-ui/core';
import { addPortAction, addConnectionTimeAction } from '../actions/action.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    port: state.mainReducer.port,
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

function PortEntry(props){
  const [port, setPort] = useState('');
  const [portError, setPortError] = useState(false);
  const navigate = useNavigate();

  // Older code for hard-coded port:
  //
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setPortError(false);
  //     if(!port){
  //       setPortError(true);
  //       console.log('Missing port; please enter and resubmit');
  //     }
  //     if(port === '9090'){
  //       navigate("/dashboard");
  //     }
  // }

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
      // setPortError(true);
      // console.log('Missing and/or incorrect port; please enter and resubmit');
      navigate("/error");
    };
  };

  return(
    <Grid
      container justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Typography 
        variant="h6"
        color="primary"
        gutterBottom
      >
        Enter the Prometheus port your Kafka instance is located on:
      </Typography> 
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setPort(e.target.value)}
          id="prometheus"
          variant="outlined"
          label="Enter port here..."
          size="small"
          style={{marginBottom : "1em" }}
          error={portError}
        />
        <Box>
          <Button
            type="submit" 
            color="primary" 
            variant="contained" 
            style={{marginRight: "5px"}}
          >
            Add Port
          </Button>
          <Button
            type="submit" 
            color="primary" 
            variant="contained" 
          >
            Start
          </Button>
        </Box>
      </form>
    </Grid>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(PortEntry);