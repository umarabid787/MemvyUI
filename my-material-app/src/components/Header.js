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
  const userImageUrl = 'user-image-url';

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" style={{ backgroundColor: '#04071E' }}>
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between', // Space between items
            alignItems: 'center', // Align items vertically
            flexGrow: 1,
          }}
        >
         <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button 
            style={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }} // Prevent capitalization
            startIcon={
              <img src="/assets/Union.png" alt="Home Icon" style={{ width: '48.63px', height: '24px' }} />
            }
            onClick={handleClick}
          >
            Memvy Bank
          </Button>
          
          <Button 
            style={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }} // Prevent capitalization
            startIcon={
              <img src="/assets/Shape.png" alt="Drafts Icon" style={{ width: '16px', height: '16px' }} />
            }
            onClick={handleClick}
          >
            Drafts
          </Button>
          
          <Button 
            style={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }} // Prevent capitalization
            startIcon={
              <img src="/assets/Shape (1).png" alt="Collaboration Icon" style={{ width: '16px', height: '16px' }} />
            }
            onClick={handleClick}
          >
            Collaboration
          </Button>
        </div>

          
          {/* <Typography variant="h3" style={{ flexGrow: 1, textAlign: 'center' }}>
            Material UI APP
          </Typography> */}
           <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar 
  alt="User Image" 
  src={userImageUrl} 
  sx={{ 
    width: 30,  // Set the desired width
    height: 30, // Set the desired height
    marginRight: '8px' 
  }} 
/>

            <Button 
            variant="contained" 
            color="secondary" 
            sx={{ borderRadius: '20px' }} // Adjust the value for more or less rounding
            >
            <Icon>add_circle</Icon>
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
