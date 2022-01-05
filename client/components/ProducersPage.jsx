import React, { useState } from 'react';
import TopBannerContainerProdPage from './TopBannerContainerProdPage.jsx';
import ProducerGraphContainer from './ProducerGraphContainer.jsx';
import ProducerColumnContainer from './ProducersColumnContainer.jsx';
import { Box, Grid } from '@material-ui/core';


export default function ProducersPage(){
  return(
<div style = {{backgroundImage: 'linear-gradient(to top right, #66a6ff, #89f7fe)'}}>''
<TopBannerContainerProdPage/>
<Box style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
  <Grid item xs={9} style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
  <ProducerGraphContainer />
</Grid>
{/*  </Grid> */}
</Box>  
</div>
  )
}