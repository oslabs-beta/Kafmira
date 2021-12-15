import React, { useState } from 'react';
import TopBannerContainerBrokerPage from './TopBannerContainerBrokerPage.jsx';
import BrokerColumnContainer from './BrokerColumnContainer.jsx';
import BrokerGraphContainer from './BrokerGraphContainer.jsx';
import { Box, Grid } from '@material-ui/core';

export default function BrokersPage(){
  return(
<div>
<TopBannerContainerBrokerPage/>
<Box >
<Grid container>
  <Grid item xs={4}>
  <BrokerColumnContainer />  
  </Grid>
  <Grid item xs={8}>
  <BrokerGraphContainer />
</Grid>
</Grid>
</Box>  
</div>
  )
}