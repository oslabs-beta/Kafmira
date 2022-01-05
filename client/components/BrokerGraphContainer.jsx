import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import BrokerLineGraph from './BrokerLineGraph.jsx'
import BrokerBarChart from './BrokerBarChart.jsx';



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
      <BrokerLineGraph />
    </Grid>
  </Grid>
</Box>
  )
}