import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import ConsumerBarDummyData from './ConsumerBarChart.jsx'
import ConsumerLineDummyData from './ConsumerLineChart.jsx'

export default function ConsumerGraphContainer(){
  return(
    <Grid
    container
    spacing={4}
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
    >
      <Grid item xs={4}>
        {/* <Box border="1px solid black">Sample Graph Area 1</Box> */}
        <ConsumerBarDummyData/>
      </Grid>
      <Grid item xs={4}>
        {/* <Box border="1px solid black">Sample Graph Area 2</Box> */}
        <ConsumerLineDummyData/>
      </Grid>
    </Grid>
  )
}