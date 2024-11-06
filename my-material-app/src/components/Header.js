import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#0072CE',
    },
  },
});

function Header() {
  const handleClick = () => {
    alert('Button is clicked');
  };

  const userImageUrl = '/assets/Ellipse 70.png';

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
    width: '100%',             // Fixed width
    height: '91px',               // Fixed height
    padding: '24px 90px',         // Padding: top/bottom 24px, left/right 90px
    backgroundColor: '#04071E',   // Background color
    borderBottom: '1px solid #313233', // Bottom border only
    margin: '0 auto',             // Center align if needed
    boxShadow: 'none',            // No box shadow if opacity is meant to hide shadow
  }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0px',// No gap between items
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              style={{ color: '#B3BED4', fontSize: '0.8rem', textTransform: 'none' }}
              startIcon={
                <img src="/assets/Union.png" alt="Home Icon" style={{ width: '48.63px', height: '24px' }} />
              }
              onClick={handleClick}
            >
              Memvy Bank
            </Button>
            
            <Button
              style={{ color: '#B3BED4', fontSize: '0.8rem', textTransform: 'none' }}
              startIcon={
                <img src="/assets/Shape.png" alt="Drafts Icon" style={{ width: '16px', height: '16px' }} />
              }
              onClick={handleClick}
            >
              Drafts
            </Button>
            
            <Button
              style={{ color: '#B3BED4', fontSize: '0.8rem', textTransform: 'none' }}
              startIcon={
                <img src="/assets/Shape (1).png" alt="Collaboration Icon" style={{ width: '16px', height: '16px' }} />
              }
              onClick={handleClick}
            >
              Collaboration
            </Button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="User Image"
              src={userImageUrl}
              sx={{
                width: 28,
                height: 28,
                marginRight: '15px',
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              style={{ textTransform: 'none' }}
              sx={{
                borderRadius: '200px',
                marginRight: '5%',
              }}
            >
              <Icon style={{ fontSize: '13.3px' }}>add_circle</Icon>
              Create
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
