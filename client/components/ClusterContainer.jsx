import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import Producer from './Producer.jsx';
import Broker from './Broker.jsx';
import Consumer from './Consumer.jsx';

export default function ClusterContainer(){
  return(
    <Box sx={{ display: 'flex', justifyContent: 'space-between'}} >
    <Grid container spacing={10}>
      <Grid item>
        <Producer />
      </Grid>
      <Grid item>
        <Broker />
      </Grid>
      <Grid item>
        <Consumer /> 
     </Grid>
    </Grid>
  </Box>   
  )
}