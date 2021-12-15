import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';

export default function ProducerGraphContainer(){
  return(
    <Grid
    container
    spacing={4}
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
  >
  <Grid item xs={4}>
    <Box border="1px solid black">Sample Graph Area 1</Box>
  </Grid>
  <Grid item xs={4}>
    <Box border="1px solid black">Sample Graph Area 2</Box>
  </Grid>
    </Grid>
  )
}