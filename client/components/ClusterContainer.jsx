import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Grid } from '@material-ui/core';
import { Button, Stack } from '@mui/material';

const mapStateToProps = (state) => {
  return {
    port: state.mainReducer.port,
    connectionTime: state.mainReducer.connectionTime
  };
};

function ClusterContainer(props){

  const [totalBrokerList, setTotalBrokerList] = useState([]);
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
        setTotalBrokerList(allData[0].data.result);

        //2. set Total Producer List
        setTotalProducerList(allData[1].data.result);
      
        // //3. set Total Consumer List
        setTotalConsumerList(allData[2].data.result);
      })

  },[])

  const broker = [];
  let bCount = 1;
  let bIndex = 0
  while (bCount <= totalBrokerList.length) {
    //Assign the broker name and shorten the string if it's greater than 25 characters
    let brokerName = totalBrokerList[bIndex].metric.instance
    let shortBrokerName = brokerName.slice(0, 25)
    if (shortBrokerName.length < brokerName.length) {
      shortBrokerName += '...'
    }
    broker.push( 
      <Button
        variant="contained" 
        style={{ display: "flex", flexDirection: 'column',  width: "25vw", height: "15vh", backgroundColor: "#0857a6", borderRadius: "5%", border: "2px solid black" }}
      >
        <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh", fontSize: '12px' }}> Broker {bCount}</p>
        <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh" }}> {shortBrokerName}</p>
      </Button>)
    bCount++;
    bIndex++;
  }

  // array to store button elements for all producers
  const producer = [];
  // count for loop execution
  let pCount = 0;
  // count for actual producers in the fetch query
  let producerNum = 0;
  while (pCount < totalProducerList.length) {
    if (totalProducerList[pCount].metric.job === 'producer') {
    //Assign the producer name and shorten the string if it's greater than 15 characters
    let producerName = totalProducerList[pCount].metric.client_id
    let shortProducerName = producerName.slice(0, 15)
    if (shortProducerName.length < producerName.length) {
      shortProducerName += '...';
    }
      producer.push(
        <Button
          variant="contained" 
          style={{ display: "flex", flexDirection: 'column',  width: "15vw", height: "15vh", backgroundColor: "#8d39fa", borderRadius: "50%", border: "2px solid black" }}
        >
          <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh", fontSize: '12px' }}> Prod { ++producerNum }</p>
          <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh" }}> {shortProducerName}</p>
        </Button>
      )
    pCount++;
  }
}


  const consumer = [];
  let cCount = 0;
  let consumerNum = 0;
  while (cCount < totalConsumerList.length) {
    if (totalConsumerList[cCount].metric.job === 'consumer' ) {
    //Assign the consumer name and shorten the string if it's greater than 15 characters
    let consumerName = totalConsumerList[1].metric.client_id
    let shortConsumerName = consumerName.slice(0, 15)
    if (shortConsumerName.length < consumerName.length) {
      shortConsumerName += '...';
    }
      consumer.push(
        <Button 
          variant="contained" 
          style={{ display: 'flex', flexDirection: 'column', width: '15vw', height: '15vh', backgroundColor: '#089ba6', borderRadius: '50%', border: "2px solid black"}}
        >
          <p style={{ color: 'white', textalign: 'center', verticalalign: 'middle', lineheight: '10vh', fontSize: '12px' }}> Consumer { ++consumerNum }</p>
          <p style={{ color: 'white', textalign: 'center', verticalalign: 'middle', lineheight: '10vh' }}>{shortConsumerName}</p>
        </Button>
      )
    cCount++;
      }
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