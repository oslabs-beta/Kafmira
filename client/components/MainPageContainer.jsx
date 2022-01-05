import React from 'react';
import TopBannerContainer from './TopBannerContainer.jsx';
import ClusterContainer from './ClusterContainer.jsx';
import BottomBanner from './BottomBanner.jsx';
import MakeMetrics from './CriticalMetrics.jsx';
// talk with group about possible style sheet
const MainPageContainer =() => {
  return (
    <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundImage: 'linear-gradient(to bottom left, #66a6ff, #89f7fe)'}}>
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