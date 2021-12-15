import React, { useState } from 'react';
import TopBannerContainerConsPage from './TopBannerContainerConsPage.jsx';
import ConsumerGraphContainer from './ConsumerGraphContainer.jsx';

export default function ConsumersPage(){
  return(
    <div>
  <TopBannerContainerConsPage/>
  <ConsumerGraphContainer/>
    </div>
  )
}