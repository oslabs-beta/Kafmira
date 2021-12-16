import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const Item = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'flex-start',
  color: theme.palette.text.secondary,
  height: '25vh',
  borderTop: '1px solid blue',
  borderBottom: '1px solid blue'
}));

export default function BrokerColumnContainer(){
  return(
  <div style = {{
    textAlign: 'center',
    height : '90vh', 
    width: '100%',
    border: '2px solid blue'}}>
    <h3>Broker(s)</h3>
      <Stack direction="column">
        <Item>Broker 1
        <br></br>
        <br></br>
        Total Messages Sent : 800
        <br></br>
        Record(s) Read per Second : 15      
        </Item>
        <Item>Broker 2
        <br></br>
        <br></br>
        Total Messages Sent : 659
        <br></br>
        Record(s) Read per Second : 12  
        </Item>
      </Stack>
    </div>
  )
}