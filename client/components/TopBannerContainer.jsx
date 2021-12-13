import * as React from 'react';
import '../styles.css'
import { useState } from 'react';
import GetLogo from './GetLogo';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';


const TopBannerContainer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cluster Overview
          </Typography>
          <GetLogo id = 'bannerLogo'/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBannerContainer;