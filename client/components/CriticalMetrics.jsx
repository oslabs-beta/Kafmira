import React, { useState, useEffect }from 'react';
import {Typography, Button, Container, Grid, Paper, Card, CardContent, Divider } from '@material-ui/core';
import { Box, flexbox } from '@mui/system';
import { connect } from 'react-redux';

// import state saved from login
const mapStateToProps = (state) => {
  return {
    port: state.mainReducer.port
  };
};




const MakeMetrics = (props) => {

  
  const metric1 = 'Active Controller(s)'
  let controllerName = '';
  // if this number is not 1 no bueno
  let value1 = 0;

  const metric2 = 'Under-replicated Partitions'
  let value2 = 0;
  

  const metric3 = 'Offline Partitions'
  let value3 = 0;

  
  // Set state hooks that will save the json object from fetch request to a variable so we can use later 
  const [activeControllerArr, setActiveControllerArr] = useState([]);
  //save an array of objects with number of 
  const [uRP, setURP] = useState([]);
  // saves an array of the Brokers of the cluster and any Offline Partitions
  const [offlinePartitionsArr, setOfflinePartitionsArr] = useState([])
  // useEffect hook will make all fetch requests once page
  useEffect(() => {
    // identifies which controller in the cluster is the active controller
    let activeControllers = fetch(`http://localhost:${props.port}/api/v1/query?query=kafka_controller_kafkacontroller_activecontrollercount`
    ).then((respose) => respose.json());
    // returns the ammount of underreplicated partitions in each cluster
    let underReplicated = fetch(`http://localhost:${props.port}/api/v1/query?query=kafka_server_replicamanager_underreplicatedpartitions`
    ).then((response) => response.json());

    let offlinePartitions = fetch(`http://localhost:${props.port}/api/v1/query?query=kafka_controller_kafkacontroller_offlinepartitionscount`
    ).then((response) => response.json());
  //creates an array of the different object that we have fetched  
  Promise.all([activeControllers, underReplicated, offlinePartitions])
    .then((allData) => {
      // saves the array of which broker is a controller
      setActiveControllerArr(allData[0].data.result);
      //save the array of under replicated partitions
      setURP(allData[1].data.result);
      // saves the array of offline partitions
      setOfflinePartitionsArr(allData[2].data.result)
    },
    )}, []);
    // iterates through the Array and finds the controller and saves instance name
    activeControllerArr.forEach(ele =>{
      if(ele.value[1] === '1'){
        value1 += 1;
        controllerName = ele.metric.instance
      }
    })
    // iterates through Array and sums up the qty of underreplicated partitions (not enough backups)
    uRP.forEach(ele=>{
      if(ele.value[1] !== '0'){
        value2 += Number(ele.value[1]);
      }
    })
// iterates through Array and sums up the qty of  partitions without a Leader(not enough backups)
    offlinePartitionsArr.forEach(ele => {
      if(ele.value[1] === '0'){
        value3 += Number(ele.value[1])
        

      }
  
    })
    
    

  


  





  // const metric4 = 'power level'
  // const value4 = 'over 9000'

  return (
  <Box>
    <Grid container alignItems="stretch">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {/* Checking value =  */}
            { metric1 }
          </Typography>
          <Divider/>
          <Typography sx={{fontSize:14 }}>
            { controllerName }
          </Typography>
          <Typography>
            { value1 }
          </Typography>
        </CardContent>
      </Card>
        
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {/* Metric:  */}
            { metric2 }
          </Typography>
          <Divider/>
          <Typography sx={{fontSize:14}}>
            {/* Value:  */}
            { value2 }

          </Typography>
        </CardContent>
      </Card>

        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {/* Metric:  */}
            { metric3 }
          </Typography>
          <Divider/>
          <Typography sx={{fontSize:14}}>
            {/* Value:  */}
            { value3 }

          </Typography>
        </CardContent>
      </Card>

        {/* <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Metric: { metric4 }
          </Typography>
          <Typography sx={{fontSize:14}}>
            Value: {value4}

          </Typography>
        </CardContent> */}



      {/* </Card> */}
    
    
    
    </Grid>
  </Box>
    
  )
}
export default connect(mapStateToProps, null)(MakeMetrics);
// export default MakeMetrics;