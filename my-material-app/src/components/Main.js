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
import { Avatar, AvatarGroup } from '@mui/material';
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
const mediaItems = [
  { type: 'image', src: '/assets/download .jpeg', alt: 'Random Image 1' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Sample Video' },
   { type: 'image', src: '/assets/1.jpeg', alt: 'Random Image 1' },
   { type: 'image', src: '/assets/download (18).jpeg', alt: 'Random Image 3' },
  { type: 'audio', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', alt: 'Sample Audio' },
{ type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Sample Video 2' },
  { type: 'image', src: '/assets/download (17).jpeg', alt: 'Random Image 2' },
  { type: 'image', src: '/assets/download (18).jpeg', alt: 'Random Image 3' },
   { type: 'image', src: '/assets/download (19).jpeg', alt: 'Random Image 1' },
   { type: 'image', src: '/assets/download (18).jpeg', alt: 'Random Image 3' },
   { type: 'audio', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', alt: 'Sample Audio' },
];

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
              style={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }} // Prevent capitalization
              startIcon={<ArrowBackIcon />}
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
            style={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }}
  variant="contained" 
  color="secondary" 
  sx={{ 
    borderRadius: '20px', 
    padding: '11px 16px' // Top & Bottom: 11px, Left & Right: 16px
  }}
  startIcon={<EditIcon />}
>
  Edit this Memvy
</Button>

<br></br>


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
      <Typography variant="h4" style={{ font:'PolySans Trial',color:'white',flexGrow: 1, textAlign: 'center' }}>Peggy Life Story</Typography>
    <Typography variant="h6" style={{ color:'white',flexGrow: 1, textAlign: 'center' }}>Created March 2011</Typography>
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '24px', // Optional padding
      }}
    >
      <AvatarGroup max={4}>
        <Avatar alt="Collaborator 1" src="/assets/collaborator1.png" />
        <Avatar alt="Collaborator 2" src="/assets/collaborator2.png" />
        <Avatar alt="Collaborator 3" src="/assets/collaborator3.png" />
        <Avatar alt="Collaborator 4" src="/assets/collaborator4.png" />
        <Avatar alt="Collaborator 5" src="/assets/collaborator5.png" /> {/* More avatars if needed */}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 90px', // Adjust as needed
    backgroundColor: 'inherit', // Background color
  }}
>
  {/* Search Field on the Left */}
  <TextField
    variant="outlined"
    placeholder="Search..."
    size="small"
    sx={{ 
      width: '200px', 
      '& .MuiOutlinedInput-root': {
        color: '#1A205A', // Text color
        '& fieldset': {
          borderColor: '#1A205A', // Border color
        },
        '&:hover fieldset': {
          borderColor: '#1A205A', // Border color on hover
        },
        '&.Mui-focused fieldset': {
          borderColor: '#1A205A', // Border color when focused
        },
      },
    }}
  />

  {/* Centered Button Group */}
  <Box sx={{ display: 'flex', gap: 1 }}>
    <Button
      style={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }}
      variant="contained"
      color="secondary"
      sx={{ borderRadius: '20px', padding: '11px 16px' }}
      onClick={handleClick}
    >
      All
    </Button>
    <Button
      style={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }}
      variant="contained"
      color="secondary"
      sx={{ borderRadius: '20px', padding: '11px 16px' }}
      onClick={handleClick}
    >
      Photos
    </Button>
    <Button
      style={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }}
      variant="contained"
      color="secondary"
      sx={{ borderRadius: '20px', padding: '11px 16px' }}
      onClick={handleClick}
    >
      Videos
    </Button>
    <Button
      style={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }}
      variant="contained"
      color="secondary"
      sx={{ borderRadius: '20px', padding: '11px 16px' }}
      onClick={handleClick}
    >
      Notes
    </Button>
    <Button
      style={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }}
      variant="contained"
      color="secondary"
      sx={{ borderRadius: '20px', padding: '11px 16px' }}
      onClick={handleClick}
    >
      Video
    </Button>
  </Box>

  {/* View Field on the Right */}
  <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1 // Space between buttons
      }}
    >
      <Button
        startIcon={<ViewListIcon />}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        List View
      </Button>
      
      <Button
        startIcon={<ViewModuleIcon />}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        Grid View
      </Button>
      
      <IconButton aria-label="menu" style={{color:'#1976d2'}}>
      <MenuIcon />
    </IconButton>
    </Box>
</Box>

 <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
      <Grid2 container spacing={2} sx={{ maxWidth: 4 * (itemSize + 16), width: '100%' }} justifyContent="center">
        {mediaItems.map((item, index) => (
          <Grid2 key={index} xs={12} sm={6} md={3} lg={3}>
            <Box
              sx={{
                width: itemSize,
                height: itemSize,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f0f0'
              }}
            >
              {item.type === 'image' && (
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
              {item.type === 'video' && (
                <Box component="video" controls sx={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </Box>
              )}
              {item.type === 'audio' && (
                <Box sx={{ textAlign: 'center', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {item.alt}
                  </Typography>
                  <audio controls style={{ width: '100%' }}>
                    <source src={item.src} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </Box>
              )}
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
     {/* <Box style={{Padding: 'inherit'}}
      sx={{
        flexGrow: 1,
        padding: 5,
        height: '100vh', // Full viewport height
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
      }}
    >
      <Grid2 container spacing={2} sx={{ maxWidth: 1200, margin: '0 auto' }}>
        {mediaItems.map((item, index) => (
          <Grid2 key={index} item xs={12} sm={6} md={3} lg={3}>
            <Paper
              sx={{
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              {item.type === 'image' && (
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
              {item.type === 'video' && (
                <Box component="video" controls sx={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </Box>
              )}
              {item.type === 'audio' && (
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {item.alt}
                  </Typography>
                  <audio controls style={{ width: '100%' }}>
                    <source src={item.src} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </Box>
              )}
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Box> */}
     
    </ThemeProvider>
  )
}

export default Main
