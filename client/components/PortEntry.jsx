import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, TextField, Typography, Button } from '@material-ui/core';
import MainPageContainer from './MainPageContainer.jsx';
import { addPortAction, addConnectionTimeAction } from '../actions/action.js';

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

export default function PortEntry(props){
  const [port, setPort] = useState('');
  const [portError, setPortError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      setPortError(false);
      if(!port){
        setPortError(true);
        console.log('Missing port; please enter and resubmit');
      }
      if(port === '9090'){
        navigate("/dashboard");
      }
  }

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
        Enter the Prometheus port your Kafka cluster is located on:
      </Typography> 
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setPort(e.target.value)}
          variant="outlined"
          label="Enter port here..."
          size="small"
          style={{marginBottom : "1em" }}
          error={portError}
        />
        <Box>
          <Button
            onClick={() => console.log('You clicked Add Port')}
            type="submit" 
            color="primary" 
            variant="contained" 
            style={{marginRight: "5px"}}
          >
            Add Port
          </Button>
          <Button
            onClick={() => console.log('You clicked Start')} 
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
}