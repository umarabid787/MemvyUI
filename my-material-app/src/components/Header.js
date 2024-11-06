import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import GroupIcon from '@mui/icons-material/Group';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import Divider from '@mui/material/Divider'; 


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

  // Replace 'user-image-url' with the actual URL of the user image
  const userImageUrl = '/assets/Ellipse 70.png';

  return (
    <ThemeProvider theme={theme}>
      <AppBar 
  position="static" 
  style={{ backgroundColor: '#04071E' }}
>
  <Toolbar
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexGrow: 1,
      padding: '24px 90px 24px 90px', // Padding: top 24px, right 90px, bottom 24px, left 90px
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
          marginRight: '15px' 
        }} 
      />
      <Button 
        variant="contained" 
        color="secondary" 
        style={{ textTransform: 'none' }}
        sx={{ borderRadius: '200px', marginRight: '15px' }}
      >
        <Icon style={{ fontSize: '13.3px' }}>add_circle</Icon>
        Create
      </Button>
    </div>
  </Toolbar>
</AppBar>

      
      {/* <Divider style={{ marginTop: '8px' }} /> Divider after the AppBar */}
      
    </ThemeProvider>
  );
}

export default Header;
