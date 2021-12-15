import React from 'react';
import { Navigate } from 'react-router';
import { Button, Grid } from '@material-ui/core';
import { Stack } from '@mui/material';

export default function Producer(){
  return(
    <Stack spacing={2}>
    <Button
    variant="contained" 
    style={{ display: "flex",  width: "25vw", height: "15vh", backgroundColor: "green", borderRadius: "5%" }}
    >
    <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh" }}>Broker 1</p>
    </Button>
    <Button 
    variant="contained"
    style={{ display: "flex",  width: "25vw", height: "15vh", backgroundColor: "green", borderRadius: "5%" }}
    >
    <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh" }}>Broker 2</p>
    </Button>
    <Button 
    variant="contained"
    style={{ display: "flex",  width: "25vw", height: "15vh", backgroundColor: "green", borderRadius: "5%" }}
    >
    <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh" }}>Broker 3</p>
    </Button>
    </Stack>
  )
}