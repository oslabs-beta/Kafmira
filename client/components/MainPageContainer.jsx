import React from 'react';
import TopBannerContainer from './TopBannerContainer.jsx';
import ClusterContainer from './ClusterContainer.jsx';
import BottomBanner from './BottomBanner.jsx';
import MakeMetrics from './CriticalMetrics.jsx';

const MainPageContainer =() => {
  return (
    <div>
      <TopBannerContainer />
      <div style ={{display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
      <ClusterContainer />
    <div style={{marginTop: '10vh'}}>
      <MakeMetrics />
    </div>
      </div>
      <div style = {{marginTop : '10vh'}}>
      <BottomBanner /> 
      </div>
    </div>
  )
}

export default MainPageContainer;