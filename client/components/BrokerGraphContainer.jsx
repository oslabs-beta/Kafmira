import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
// import BrokerLineGraph from './BrokerLineGraph.jsx'
import BrokerTotalFetchReq from './BrokerTotalFetchReq.jsx'
import BrokerFailedProdReq from './BrokerFailedProdReq.jsx';

export default function BrokerGraphContainer(){
  return(
    // <Box sx={{ display: 'flex', justifyContent: 'center', textAlign : 'center'}}>
      // <Grid
      //   container
      //   spacing={2}
      //   direction="column"
      //   justifyContent="flex-start"
      //   alignItems="center"
      // >
      <React.Fragment>
        <Grid container item xs={2}>
          <BrokerTotalFetchReq />
        </Grid>
        <Grid container item xs={2}>
          <BrokerFailedProdReq />
        </Grid>
      </React.Fragment>
      // </Grid>
    // </Box>
  )
}