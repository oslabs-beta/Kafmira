import React from 'react'
import { Container, Grid, Box, Typography, Link } from '@material-ui/core'
// import { createTheme } from '@mui/material/styles';

  // require shell property from electron and assign to variable
  // const shell = require('electron').shell;

export default function BottomBanner() {

  return (
    <footer>
    {/* can add sx prop to accept all system props as well as valid CSS */}
    <Box  
      p={2}
      mt={2}
      align='center'
      // try the flex first
      // display='flex'
      // justifyContent='flex-end'
      // try the sx next if flex didnt work
      sx={{
        bgcolor: 'info.main',
        color: 'white',
        zIndex: 'tooltip',
        left: '50%',
        top: '100%'
      }} 
    >
        <Container maxWidth='lg'> 
          <Box m={1.5} borderBottom={1}>
            <Typography
              variant='h6'
              color=''
              gutterBottom
            >
              SSHK Technology Group
            </Typography>
          </Box>
            {/* This method would open the link in the current electron shell window (not preferred)
            href='https://github.com/oslabs-beta/Kafmira' */}
            {/* onClick={()=> window.open('https://github.com/oslabs-beta/Kafmira', '_blank')}; */}
            {/* the '_blank' keyword will open a new tab/window EVERY time,
            if 'blank' is used it will open a new window when one link is clicked and 
            then any future link wil reload that new window with the current link clicked
            Now keep in mind that these differences account for each individual link */}
          <Grid container direction='row' spacing={6}>
            <Grid item xs={12} sm={4}>
              <Link onClick={()=> window.open('https://github.com/oslabs-beta/Kafmira', 'blank')} color='inherit'>
                Need Help?
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link onClick={()=> window.open('https://github.com/oslabs-beta/Kafmira', 'blank')} color='inherit'>
                About the Team
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link onClick={()=> window.open('https://github.com/oslabs-beta/Kafmira', 'blank')} color='inherit'>
                Contact Us
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}
