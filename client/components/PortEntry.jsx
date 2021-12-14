import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, TextField, Typography, Button } from '@material-ui/core';
import MainPageContainer from './MainPageContainer.jsx';

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
        navigate("/dashboard")
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
        Enter the Promotheus port your Kafka cluster is located on:
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