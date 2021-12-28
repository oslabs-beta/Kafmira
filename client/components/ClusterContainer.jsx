import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Grid } from '@material-ui/core';
import { Button, Stack } from '@mui/material';
import Producer from './Producer.jsx';
//import Broker from './Broker.jsx';
import Consumer from './Consumer.jsx';

const mapStateToProps = (state) => {
  return {
    port: state.mainReducer.port
  };
};


function ClusterContainer(props){

  const [totalBrokerCount, setTotalBrokerCount] = useState([])

  useEffect(() => {
    let totalBrokers = fetch(
      `http://localhost:9090/api/v1/query?query=kafka_controller_kafkacontroller_activecontrollercount`
    ).then((response) => response.json());

    Promise.all([totalBrokers])
      .then((allData) => {
        //1. set Total Broker Count
        setTotalBrokerCount(allData[0].data.result.length)}
      )},[])

  const broker = [];
  let n = 1;
  while (n <= totalBrokerCount) {
    broker.push( <Button
      variant="contained" 
      style={{ display: "flex",  width: "25vw", height: "15vh", backgroundColor: "#0857a6", borderRadius: "5%", border: "2px solid black" }}
      >
      <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh" }}>Broker {n}</p>
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

//export default connect(mapStateToProps, null)(ClusterContainer);
export default ClusterContainer