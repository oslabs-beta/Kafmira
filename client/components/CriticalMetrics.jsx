import React, { useState, useEffect }from 'react';
import {Typography, Button, Container, Grid, Paper, Card, CardContent, Divider } from '@material-ui/core';
import { Box, flexbox } from '@mui/system';


const MakeMetrics = () => {
  useEffect(() => {
    let activeControllers = fetch(
    'http://localhost:9090/api/v1/query?query=kafka_controller_kafkacontroller_activecontrollercount'
    ).then((respose) => respose.json());
    
  })
  
  
  const metric1 = 'Active Controller(s)'
  const value1 = '1'

  const metric2 = 'Under-replicated Partitions'
  const value2 = '0'

  const metric3 = 'Offline Partitions'
  const value3 = '0'

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
            {/* Value:  */}
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

export default MakeMetrics;