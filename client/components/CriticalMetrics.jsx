import React, { useState, useEffect }from 'react';
import {Typography, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

const useStyles = makeStyles({
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }


})


const MakeMetrics = () => {
  const [metricName, setMetricName] = useState('');
  const [values, setValues] = useState('')


  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(res => res.json())
      .then(data => setValues(data.data.result[0].value[1]))

   
    
  }, [])

  return (
    <div>
      <h1>{values}</h1>
    </div>
    
  )
}

export default MakeMetrics;