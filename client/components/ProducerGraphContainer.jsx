import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import MakeResponseRateGraph from './ProducerResponeRate.jsx';
import MakeRequestRateGraph from './ProducerRequestRate.jsx';
import MakeRequestTotalGraph from './ProducerRequestTotal.jsx';




export default function ProducerGraphContainer(){
  return(
    <Box sx={{display: 'flex', justifyContent: 'center', textAlign : 'center'}}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={3}>
          <MakeResponseRateGraph /> 
        </Grid>
        <Grid item xs={3}>
          <MakeRequestRateGraph />
        </Grid>
        <Grid item xs={3}>
          <MakeRequestTotalGraph />
        </Grid>
      </Grid>
    </Box>
  )
}