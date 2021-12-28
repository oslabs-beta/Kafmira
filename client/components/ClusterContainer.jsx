import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Grid } from '@material-ui/core';
import { Button, Stack } from '@mui/material';

const mapStateToProps = (state) => {
  return {
    port: state.mainReducer.port
  };
};


function ClusterContainer(props){

  const [totalBrokerCount, setTotalBrokerCount] = useState([]);
  const [totalProducerList, setTotalProducerList] = useState([]);
  const [totalConsumerList, setTotalConsumerList] = useState([]);

  useEffect(() => {
    let totalBrokers = fetch(
      `http://localhost:${props.port}/api/v1/query?query=kafka_controller_kafkacontroller_activecontrollercount`
    ).then((response) => response.json());

    let totalProducers = fetch(
      `http://localhost:${props.port}/api/v1/query?query=kafka_producer_producer_metrics_record_send_total`
    ).then((response) => response.json());

    let totalConsumers = fetch(
      `http://localhost:${props.port}/api/v1/query?query=kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total`
    ).then((response) => response.json());

    Promise.all([totalBrokers, totalProducers, totalConsumers])
      .then((allData) => {
        //1. set Total Broker Count
        setTotalBrokerCount(allData[0].data.result.length);

        //2. set Total Producer List
        setTotalProducerList(allData[1].data.result);

        //3. set Total Consumer List
        setTotalConsumerList(allData[2].data.result);
      }
      )},[])

  const broker = [];
  let bCount = 1;
  while (bCount <= totalBrokerCount) {
    broker.push( 
      <Button
        variant="contained" 
        style={{ display: "flex",  width: "25vw", height: "15vh", backgroundColor: "#0857a6", borderRadius: "5%", border: "2px solid black" }}
      >
        <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh" }}> Broker {bCount}</p>
      </Button>)
    bCount++;
  }

  // array to store button elements for all producers
  const producer = [];
  // count for loop execution
  let pCount = 0;
  // count for actual producers in the fetch query
  let producerNum = 0;
  while (pCount < totalProducerList.length) {
    if (totalProducerList[pCount].metric.job === 'producer')
      producer.push(
        <Button
          variant="contained" 
          style={{ display: "flex",  width: "10vw", height: "10vh", backgroundColor: "#8d39fa", borderRadius: "50%", border: "2px solid black" }}
        >
          <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh" }}> Producer { ++producerNum }</p>
        </Button>
      )
    pCount++;
  }

  const consumer = [];
  let cCount = 0;
  let consumerNum = 0;
  while (cCount < totalConsumerList.length) {
    if (totalConsumerList[cCount].metric.job === 'consumer')
      consumer.push(
        <Button 
          variant="contained" 
          style={{ display: 'flex', width: '10vw', height: '10vh', backgroundColor: '#089ba6', borderRadius: '50%', border: "2px solid black"}}
        >
          <p style={{ color: 'white', textalign: 'center', verticalalign: 'middle', lineheight: '10vh' }}> Consumer { ++consumerNum }</p>
        </Button>
      )
    cCount++;
  }

  return(
    <Box sx={{ display: 'flex', justifyContent: 'space-between'}} >
    <Grid container spacing={10}>
      <Grid item>
        <Stack spacing={2}>
          {producer}
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing ={2}>
          {broker}
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={2}>
          {consumer}
        </Stack>
     </Grid>
    </Grid>
  </Box>   
  )

}

export default connect(mapStateToProps, null)(ClusterContainer);
