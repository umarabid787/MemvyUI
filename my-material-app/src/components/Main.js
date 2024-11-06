import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import { Avatar, AvatarGroup, Divider } from '@mui/material';
import { TextField, Select, MenuItem } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton} from '@mui/material';
import {  Paper,Grid2  } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import NoteIcon from '@mui/icons-material/Note';
import MenuIcon from '@mui/icons-material/Menu';
import GridLayout from './GridLayout';
import { Padding } from '@mui/icons-material';
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
const itemSize = 250;

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
   <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, horizontal on larger
    justifyContent: { xs: 'center', sm: 'space-between' },
    alignItems: 'center',
    padding: { xs: '10px 20px', sm: '20px 90px' }, // Smaller padding on mobile
    //backgroundColor: 'inherit',
    gap: { xs: 2, sm: 0 }, // Add gap between elements on smaller screens
  }}
>
  {/* Search Field on the Left */}
  <TextField
  variant="outlined"
  placeholder="Search..."
  size="small"
  sx={{
    width: { xs: '100%', sm: '200px' }, // Full width on small screens
    '& .MuiOutlinedInput-root': {
      color: 'white', // Set input text color to white
      borderRadius: '20px', // Rounded edges to make it look like a button
      '& fieldset': {
        borderColor: '#1A205A',
      },
      '&:hover fieldset': {
        borderColor: '#1A205A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1A205A',
      },
    },
    '& input': {
      color: 'white', // Set placeholder text color to white
      padding: '10px 20px', // Add padding for a button-like appearance
    },
    '& .MuiInputBase-input': {
      backgroundColor: '#1A205A', // Optional: Set background color for better contrast
      borderRadius: '20px', // Ensure input area is also rounded
    },
  }}
/>


  {/* Centered Button Group */}
  <Box
    sx={{
      display: 'flex',
      gap: 1,
      flexWrap: 'wrap', // Wrap buttons on smaller screens
      justifyContent: { xs: 'center', sm: 'initial' },
    }}
  >
    {['All', 'Photos', 'Videos', 'Notes', 'Video'].map((label) => (
      <Button
        key={label}
        style={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }}
        variant="contained"
        color="secondary"
        sx={{
          borderRadius: '20px',
          padding: '8px 12px', // Adjust padding for smaller screens
        }}
        onClick={handleClick}
      >
        {label}
      </Button>
    ))}
  </Box>

  {/* View Field on the Right */}
  <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 0, // Reduced gap for closer spacing
    marginTop: { xs: 2, sm: 0 }, // Add margin on smaller screens to create space
    justifyContent: { xs: 'center', sm: 'initial' },
  }}
>
  <Button
    size="small"
    sx={{ 
      textTransform: 'none', 
      color: 'white', // Default color
      '&:hover': {
        color: 'white', // Change to white on hover
      } 
    }}
  >
    View
  </Button>

  <Button
  startIcon={
    <img 
      src="/assets/waiting.png" 
      alt="Waiting Icon" 
      style={{ 
        width: '13.5px', 
        height: '18px', 
        filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(1010%) hue-rotate(200deg) brightness(94%) contrast(91%)' 
      }}
    />
  }
  size="small"
  sx={{ 
    textTransform: 'none', 
    color: 'secondary', // Default text color
    '&:hover': {
      color: 'white', // Changes text color to white on hover
      '& img': {
        filter: 'brightness(0) saturate(100%) invert(100%)', // Makes icon white on hover
      }
    }
  }}
>
</Button>


  <Button
    startIcon={
      <img 
        src="/assets/grid.png" 
        alt="Grid View Icon" 
        style={{ width: '18px', height: '18px', filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(1010%) hue-rotate(200deg) brightness(94%) contrast(91%)' }} // Adjust filter for default color
      />
    }
    size="small"
    sx={{ 
      textTransform: 'none', 
      color: 'secondary', // Default color
      '&:hover': {
        color: 'white', // Change to white on hover
      } 
    }}
  >
  </Button>

  <IconButton aria-label="menu" sx={{ 
    color: 'secondary', // Default color
    '&:hover': {
      color: 'white', // Change to white on hover
    } 
  }}>
    <img 
      src="/assets/three_dot.png" 
      alt="Menu Icon" 
      style={{ width: '16px', height: '20px', filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(1010%) hue-rotate(200deg) brightness(94%) contrast(91%)' }} // Adjust filter for default color
    />
  </IconButton>
</Box>


</Box>
<Divider
  sx={{
    backgroundColor: 'secondary.main', // Theme color for the divider
    height: '1px', // Thickness of the divider
    marginTop: '10px', // Space before the divider
    marginLeft: '90px', // Gap from the left side
    marginRight: '90px', // Gap from the right side
  }}
/>


     <GridLayout1 />
    </ThemeProvider>
  )
}

export default Main
