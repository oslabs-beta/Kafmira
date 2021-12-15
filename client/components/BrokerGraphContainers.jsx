import React, { useState, useEffect }from 'react';
import {Typography, Button, Container, Grid, Paper, Card, CardContent } from '@material-ui/core';
import MakeBrokerCharts from './BrokerFirstChart.jsx';


const BrokerGraphContainer = () => {
  return (
    <div>
        <MakeBrokerCharts/>
    </div>
  )


}

export default BrokerGraphContainer;