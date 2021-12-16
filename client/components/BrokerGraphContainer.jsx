import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import BrokerDummyData from './LineChart.jsx'
import BrokerBarDummyData from './BarChart.jsx';



export default function BrokerGraphContainer(){
  return(
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
  )
}