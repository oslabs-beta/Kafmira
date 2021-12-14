import React from 'react';
import TopBannerContainer from './TopBannerContainer.jsx';
import ClusterContainer from './ClusterContainer.jsx';
import BottomBanner from './BottomBanner.jsx';

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