import React from 'react'
import { Container, Grid, Box, Typography, Link } from '@material-ui/core'

export default function BottomBanner() {
  return (
    <footer>
      {/* can add sx prop to accept all system props as well as valid CSS */}
      <Box  
        p={2}
        m={2}
        // maxWidth={}
        // maxHeight={}
        align='center' 
        color='white'
        borderColor='black'
        border='solid'
        borderRadius='10px'
        bgcolor='info.main' 
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
          <Grid container direction='row' spacing={6}>
            <Grid item xs={12} sm={4}>
              <Link href='https://github.com/oslabs-beta/Kafmira' color='inherit'>
                Need Help?
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link href='https://github.com/oslabs-beta/Kafmira' color='inherit'>
                About the Team
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link href='https://github.com/oslabs-beta/Kafmira' color='inherit'>
                Contact Us
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}
