import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { Box } from '@material-ui/core';
import Producer from './Producer.jsx';

export default function ClusterContainer(){
  return(
    <Box>
    <Producer />
    {/* <Broker />
    <Consumer />   */}
    </Box>
  )
}