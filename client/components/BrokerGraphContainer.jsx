import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
// import BrokerLineGraph from './BrokerLineGraph.jsx'
import BrokerTotalFetchReq from './BrokerTotalFetchReq.jsx'
import BrokerFailedProdReq from './BrokerFailedProdReq.jsx';

export default function BrokerGraphContainer(){
  return(
    <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign : 'center'}}>
      <Grid
      container
      spacing={4}
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      >
        <Grid item xs={4}>
          <BrokerTotalFetchReq />
          {/* <BrokerLineGraph /> */}
        </Grid>
        <Grid item xs={4}>
          <BrokerFailedProdReq />
          {/* <BrokerLineGraph /> */}
        </Grid>
      </Grid>
    </Box>
  )
}