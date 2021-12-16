import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import MakeProducerLineGraph from './ProducerLineGraph.jsx';
import MakeProducerBarGraph from './ProducerBarGragh.jsx';



export default function ProducerGraphContainer(){
  return(
    <Box sx={{textAlign : 'center'}}>
    <Typography variant ='h4'>Producer 1</Typography>
    <Grid
    container
    spacing={4}
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
  >
  <Grid item xs={4}>
    <MakeProducerLineGraph /> 
  </Grid>
  <Grid item xs={4}>
    <MakeProducerBarGraph/>
  </Grid>
    </Grid>
    </Box>
  )
}