import React, { useState } from 'react';
import TopBannerContainerProdPage from './TopBannerContainerProdPage.jsx';
import ProducerGraphContainer from './ProducerGraphContainer.jsx';
import ProducerColumnContainer from './ProducersColumnContainer.jsx';
import { Box, Grid } from '@material-ui/core';


export default function ProducersPage(){
  return(
<div>
<TopBannerContainerProdPage/>
<Box >
<Grid container>
  <Grid item xs={3}>
  <ProducerColumnContainer />  
  </Grid>
  <Grid item xs={9}>
  <ProducerGraphContainer />
</Grid>
</Grid>
</Box>  
</div>
  )
}