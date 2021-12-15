import React, { useState } from 'react';
import TopBannerContainerProdPage from './TopBannerContainerProdPage.jsx';
import ProducerColumnContainer from './ProducersColumnContainer.jsx';

export default function ProducersPage(){
  return(
<div>
  <TopBannerContainerProdPage/>
  <ProducerColumnContainer/>
</div>
  )
}