import React, { useState } from 'react';
import TopBannerContainerProdPage from './TopBannerContainerProdPage.jsx';
import ProducerGraphContainer from './ProducerGraphContainer.jsx';

export default function ProducersPage(){
  return(
  <div>
  <TopBannerContainerProdPage/>
  <ProducerGraphContainer />
  </div>
  )
}