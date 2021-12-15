import React, { useState } from 'react';
import TopBannerContainerBrokerPage from './TopBannerContainerBrokerPage.jsx';
import BrokerGraphContainer from './BrokerGraphContainers.jsx';
export default function BrokersPage(){
  return(
    <div>
      <TopBannerContainerBrokerPage/>
      <BrokerGraphContainer/>
    </div>
  )
}