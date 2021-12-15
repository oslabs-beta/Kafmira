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

export default function ProducerColumnContainer(){
  return(
  <div style = {{
    textAlign: 'center',
    height : '90vh', 
    width: '100%',
    border: '2px solid blue'}}>
    <h3>Producer(s)</h3>
      <Stack direction="column">
        <Item>Producer 1</Item>
        <Item>Producer 2</Item>
      </Stack>
    </div>
  )
}