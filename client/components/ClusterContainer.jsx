import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { Button, Stack } from '@mui/material';
import Producer from './Producer.jsx';
//import Broker from './Broker.jsx';
import Consumer from './Consumer.jsx';


function ClusterContainer(){

  const [totalBrokerCount, setTotalBrokerCount] = useState([])

  useEffect(() => {
    let totalBrokers = fetch(
      `http://localhost:9090/api/v1/query?query=kafka_controller_kafkacontroller_activecontrollercount`
    ).then((response) => response.json());

    Promise.all([totalBrokers])
      .then((allData) => {
        //1. set Total Broker Count
        setTotalBrokerCount(allData[0].data.result.length - 1)}
      )},[])

  const broker = [];
  let n = 0;
  while (n <= totalBrokerCount) {
    broker.push( <Button
      variant="contained" 
      style={{ display: "flex",  width: "25vw", height: "15vh", backgroundColor: "#0857a6", borderRadius: "5%", border: "2px solid black" }}
      >
      <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh" }}>Broker {n+1}</p>
      </Button>)
      n++;
  }
 

  return(
    <Box sx={{ display: 'flex', justifyContent: 'space-between'}} >
    <Grid container spacing={10}>
      <Grid item>
        <Producer />
      </Grid>
      <Grid item>
        <Stack spacing ={2}>
          {broker}
        </Stack>
      </Grid>
      <Grid item>
        <Consumer /> 
     </Grid>
    </Grid>
  </Box>   
  )
}

export default ClusterContainer;