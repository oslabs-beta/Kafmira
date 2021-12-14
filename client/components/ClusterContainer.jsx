import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { Box, Grid } from '@material-ui/core';
import Producer from './Producer.jsx';
import Broker from './Broker.jsx';
import Consumer from './Consumer.jsx';

export default function ClusterContainer(){
  return(
    <Box sx={{ flexGrow: 1 }} >
    <Grid container spacing={9} >
      <Grid item Producers >
        <Producer />
      </Grid>
      <Grid item Brokers >
        <Broker />
      </Grid>
      <Grid item Consumers>
        <Consumer /> 
     </Grid>
    </Grid>
  </Box>   
  )
}