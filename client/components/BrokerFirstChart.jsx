import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LineChart from './LineChart.jsx'
import {Grid, Paper} from '@material-ui/core';


const MakeBrokerCharts = () => {
  // uses styling above
  // const classes = useStyles()
 
  
  const yAxis = [10,20,30,40];
  const xAxis = [0,1,2,3,4,5];
  return (
    <div className={classes.root}>
      <p className={classes.theme}>Broker Metrics</p>
        <Grid item xs={12} className={classes.child}>
            <Paper className={classes.paper}>
              <LineChart
                metricName={"Bytes the have been Produced"}
                label={'Bytes Per Second'}
                
                x={xAxis}
                y={yAxis}
            />
          </Paper>
        </Grid> 


      
    
    </div>
  )


}

export default MakeBrokerCharts;