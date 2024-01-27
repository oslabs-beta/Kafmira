import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import ConsumerBarDummyData from './ConsumerBarChart.jsx'
import ConsumerMakeLineChart from './ConsumerLineChart.jsx'

export default function ConsumerGraphContainer(){
  return(
    <Box sx={{display: 'flex', justifyContent: 'space-between', textAlign : 'center'}}>
    {/* <Typography variant ='h4'>Consumer 1</Typography> */}
    <Grid
      container
      spacing={4}
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
    >
      {/* <Grid item xs={4}>
        <Box border="1px solid black">Sample Graph Area 1</Box>
        <ConsumerBarDummyData/>
      </Grid> */}
      <Grid item xs={4}>
        {/* <Box border="1px solid black">Sample Graph Area 2</Box> */}
        <ConsumerMakeLineChart/>
      </Grid>
    </Grid>
    </Box>
  )
}