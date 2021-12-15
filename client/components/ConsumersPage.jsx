import React, { useState } from 'react';
import TopBannerContainerConsPage from './TopBannerContainerConsPage.jsx';
import ConsumerGraphContainer from './ConsumerGraphContainer.jsx';
import ConsumerColumnContainer from './ConsumersColumnContainer.jsx';
import { Box, Grid } from '@material-ui/core';


export default function ConsumersPage(){
  return(
    <div>
  <TopBannerContainerConsPage/>
<Box >
<Grid container>
  <Grid item xs={4}>
  <ConsumerColumnContainer />  
  </Grid>
  <Grid item xs={8}>
  <ConsumerGraphContainer />
</Grid>
</Grid>
</Box>  
</div>
  )
}