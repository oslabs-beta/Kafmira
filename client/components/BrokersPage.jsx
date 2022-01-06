import React, { useState } from 'react';
import TopBannerContainerBrokerPage from './TopBannerContainerBrokerPage.jsx';
import BrokerColumnContainer from './BrokerColumnContainer.jsx';
import BrokerGraphContainer from './BrokerGraphContainer.jsx';
import { Box, Grid } from '@material-ui/core';
import { style } from '@mui/system';

export default function BrokersPage() {
  return(
    <div style = {{ backgroundImage: 'linear-gradient(to top right, #66a6ff, #89f7fe)' }}>
      <TopBannerContainerBrokerPage/>
      <Box 
        sx={{ flexGrow: 1 }}
        // style = {{
        //   display:'flex', 
        //   flexDirection: 'row', 
        //   justifyContent: 'center'
        // }}
      >
        <Grid 
          container 
          direction='column'
          justifyContent='flex-start'
          alignItems='center'
        >
          {/* <Grid container item spacing={2} >  */}
            <BrokerGraphContainer />
          {/* </Grid> */}
        </Grid>
      </Box>
    </div>  
  )
  // was in grid item
  // style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}
}