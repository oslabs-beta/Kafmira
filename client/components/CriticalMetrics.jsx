import React, { useState, useEffect }from 'react';
import {Typography, Button, Container, Grid, Paper } from '@material-ui/core';
import OutlinedCard from './firstMetric.js';

// const useStyles = makeStyles({
//   title: {
//     textDecoration: 'underline',
//     marginBottom: 20
//   }


// })


const MakeMetrics = () => {
  // const [metricName, setMetricName] = useState('');
  // const [values, setValues] = useState('')


  // useEffect(() => {
  //   fetch('http://localhost:3000/data')
  //     .then(res => res.json())
  //     .then(data => setValues(data))

   
    
  // }, [])

  return (
    <div>
      <Container>
        <OutlinedCard/>
      </Container>
    </div>
    
  )
}

export default MakeMetrics;