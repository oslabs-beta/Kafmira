import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { Box, Grid } from '@material-ui/core';
import Producer from './Producer.jsx';
import Broker from './Broker.jsx'

export default function ClusterContainer(){
  return(
    <Box sx={{ flexGrow: 1 }} >
    <Grid container spacing={9} >
      <Grid item>
      <Producer />
      </Grid>
      <Grid item>
      <Broker />
      </Grid>
      <Grid item>
      {/* <Consumer />  */}
     </Grid>
    </Grid>
  </Box>   
  )
}