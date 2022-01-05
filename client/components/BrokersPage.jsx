import React, { useState } from 'react';
import TopBannerContainerBrokerPage from './TopBannerContainerBrokerPage.jsx';
import BrokerColumnContainer from './BrokerColumnContainer.jsx';
import BrokerGraphContainer from './BrokerGraphContainer.jsx';
import { Box, Grid } from '@material-ui/core';

export default function BrokersPage(){
  return(
    <div style = {{backgroundImage: 'linear-gradient(to top right, #66a6ff, #89f7fe)'}}>
    <TopBannerContainerBrokerPage/>
      <Box >
      <Grid container>
        {/* <Grid item xs={3}>
          <BrokerColumnContainer />  
        </Grid> */}
        <Grid item xs={9}>
          <BrokerGraphContainer />
        </Grid>
      </Grid>
      </Box>  
    </div>
  )
}