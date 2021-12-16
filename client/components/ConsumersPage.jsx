import React, { useState } from 'react';
import TopBannerContainerConsPage from './TopBannerContainerConsPage.jsx';
import ConsumerGraphContainer from './ConsumerGraphContainer.jsx';
import ConsumerColumnContainer from './ConsumersColumnContainer.jsx';
import { Box, Grid } from '@material-ui/core';


export default function ConsumersPage(){
  return(
    <div style = {{backgroundImage: 'linear-gradient(to top right, #66a6ff, #89f7fe)'}}>
  <TopBannerContainerConsPage/>
<Box >
<Grid container>
  <Grid item xs={3}>
  <ConsumerColumnContainer />  
  </Grid>
  <Grid item xs={9}>
  <ConsumerGraphContainer />
</Grid>
</Grid>
</Box>  
</div>
  )
}