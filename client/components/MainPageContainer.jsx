import React from 'react';
import TopBannerContainer from './TopBannerContainer.jsx';
import ClusterContainer from './ClusterContainer.jsx';
import BottomBanner from './BottomBanner.jsx';
import MakeMetrics from './CriticalMetrics.jsx';
// talk with group about possible style sheet
const MainPageContainer =() => {
  return (
    <div >
      <TopBannerContainer />
      <ClusterContainer />
      <MakeMetrics />
      <BottomBanner /> 
    </div>
  )
}

export default MainPageContainer;