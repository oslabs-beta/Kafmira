import React from 'react'
import { Container, Grid, Box, Typography, Link, Button, ButtonGroup, makeStyles } from '@material-ui/core'
import { Stack } from '@mui/material'
import { Navigate } from 'react-router';

export default function Consumer() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
    //   p={1}
    //   m={2}
    //   align='center' 
    //   color='black'
    //   borderColor='black'
    //   border='solid'
    //   borderRadius='10px'
    //   // display='flex'
    //   width='25%'
    >
      <Grid container>
        <Stack 
        direction='column' 
        spacing={2} 
        alignItems='center'
        justifyContent='space-around'
        >
          {/* <ButtonGroup 
            orientation='vertical'
            color='primary' 
            variant='contained'
            disableElevation
          > */}
            <Button 
              // onClick=
              style={{ 
                display: 'flex',  
                width: '10vw', 
                height: '10vh', 
                backgroundColor: 'orangered', 
                borderRadius: '50%' 
              }}
            >
              <p style={{ 
                color: 'white', 
                textalign: 'center', 
                verticalalign: 'middle', 
                lineheight: '10vh',
              }}>
                Consumer 1
              </p>
            </Button>
            <Button 
              // onClick=
              style={{ 
                display: 'flex',  
                width: '10vw', 
                height: '10vh', 
                backgroundColor: 'orangered', 
                borderRadius: '50%' 
              }}
            >
              <p style={{ 
                color: 'white', 
                textalign: 'center', 
                verticalalign: 'middle', 
                lineheight: '10vh',
              }}>
                Consumer 2
              </p>
            </Button>
          {/* </ButtonGroup> */}
        </Stack>
      </Grid>
    </Box>
  )
}
