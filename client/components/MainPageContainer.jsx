import React from 'react';
import TopBannerContainer from './TopBannerContainer.jsx';
import ClusterContainer from './ClusterContainer.jsx';

const MainPageContainer =() => {
  return (
    <div>
      <TopBannerContainer />
      <ClusterContainer />
      {/* <CriticalMetrics /> */}
      <BottomBanner /> 
    </div>
  )
}

export default MainPageContainer;