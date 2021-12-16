import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import BrokerDummyData from './LineChart.jsx'
import BrokerBarDummyData from './BarChart.jsx';



export default function BrokerGraphContainer(){
  return(
  <Box sx={{textAlign : 'center'}}>
    <Typography variant ='h4'>Broker 1</Typography>
    <Grid
    container
    spacing={4}
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
  >
    <Grid item xs={4}>
      <BrokerBarDummyData/>
    </Grid>
    <Grid item xs={4}>
      <BrokerDummyData />
    </Grid>
  </Grid>
</Box>
  )
}