import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, AvatarGroup, Divider } from '@mui/material';
import GridLayout1 from './GridLayout1';




const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#2B3672',
    },
  },
});

function Main() {
     const handleClick = () => {
    alert('Button is clicked');
  };
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
             style={{ color: '#A9B4CC', fontSize: '0.8rem', textTransform: 'none', marginLeft: '15px' }} // Prevent capitalization
            startIcon={
              <img src="/assets/back.png" alt="Drafts Icon" style={{ width: '7.9px', height: '14.14px' }} />
            }
            onClick={handleClick}
          >
            Back
          </Button>
          
        
          </div>
          
          {/* <Typography variant="h3" style={{ flexGrow: 1, textAlign: 'center' }}>
            Material UI APP
          </Typography> */}
           <div style={{ display: 'flex', alignItems: 'center' }}>
            
            <Button 
            style={{ color: '#FFFFFF', fontSize: '0.8rem', textTransform: 'none' }}
  variant="contained" 
  color="secondary" 
  sx={{ 
    borderRadius: '20px', 
    padding: '11px 16px',
     marginRight: '50px'// Top & Bottom: 11px, Left & Right: 16px
  }}
  startIcon={
              <img src="/assets/efit.png" alt="Drafts Icon" style={{ width: '13px', height: '13px' }} />
            }
>
  Edit this Memvy
</Button>
          </div>
        </Toolbar>
         </AppBar>
        <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '170px', // Set height for the box
         // border: '1px solid #ccc', // Optional border for visibility
          margin: '20px 40px', // Margin around the box
        }}
      >
        <img 
          src="/assets/95ed528db41e7c00e1ed7fcb7f31e1cc.png" // Replace with your image URL
          alt="Centered" 
           style={{ 
          width: '159px', 
          height: '160px', 
          objectFit: 'cover' // This will crop the image if it does not match the aspect ratio
        }}  // Make sure the image fits within the box
        />
      </Box>
      <Typography variant="h3" style={{ font:'PolySans Trial',color:'white',flexGrow: 1, textAlign: 'center', marginBottom: '10px' }}>Peggy Life Story</Typography>
    <Typography variant="h6" style={{ color:'#B3BED4',flexGrow: 1, textAlign: 'center' }}>Created March 2011</Typography>
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '24px', // Optional padding
      }}
    >
      <AvatarGroup max={4}>
        <Avatar alt="Collaborator 1" src="/assets/Ellipse 51.png" />
        <Avatar alt="Collaborator 2" src="/assets/Ellipse 52.png" />
        <Avatar alt="Collaborator 3" src="/assets/Ellipse 56.png" />
        <Avatar alt="Collaborator 4" src="/assets/Ellipse 54.png" /> {/* More avatars if needed */}
      </AvatarGroup>
    </Box>
  <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        //minHeight: '200px', // Set a minimum height for centering
       // margin: '24px 90px', // Optional: margin around the box
        textAlign: 'center', // Center text inside the box
      }}
    >
      <Typography 
        variant="body1" // Use a suitable variant for body text
        style={{ 
          color: 'white', 
          maxWidth: '650px', // Limit the width for wrapping
        }}
      >
        Peggy Harrison's life is a tapestry of cherished memories, from her birth and education to her impactful career and loving family. Her story, enriched by audio, video clips, photos, and notes from loved ones, beautifully captures her vibrant spirit and passions.
      </Typography>
    </Box>
     <GridLayout1 />
    </ThemeProvider>
  )
}

export default Main
