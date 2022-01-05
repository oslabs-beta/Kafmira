import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import MakeResponseRateGraph from './ProducerResponeRate.jsx';
import MakeRequestRateGraph from './ProducerRequestRate.jsx';
import MakeRequestTotalGraph from './ProducerRequestTotal.jsx';




export default function ProducerGraphContainer(){
  return(
    <Box sx={{textAlign : 'center'}}>
    <Typography variant ='h4'>Producer 1</Typography>
    {/* <div style ={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> */}
    <Grid
    container
    spacing={4}
    direction="column"
    justifyContent="center"
    alignItems="flex-start"
  >
  <Grid item xs={4}>
    <MakeResponseRateGraph /> 
  </Grid>
  <Grid item xs={4}>
    <MakeRequestRateGraph/>
  </Grid>
  <Grid item xs={4}>
    <MakeRequestTotalGraph/>
  </Grid>
    </Grid>
    {/* </div> */}
    </Box>
  )
}