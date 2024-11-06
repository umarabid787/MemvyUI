import React, { useState } from 'react';
import { Box, Paper, Typography, Avatar, Button, TextField, Divider } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { format } from 'date-fns';
import { IconButton } from '@mui/material';

const mediaItems = [
  { 
    type: 'image', 
    src: '/assets/95ed528db41e7c00e1ed7fcb7f31e1cc.png', 
    alt: 'Random Image 1', 
    username: 'user1', 
    date: '2024-11-01',
    userImage: '/assets/Ellipse 63.png' // User image for user1
  },
  { 
    type: 'audio', 
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 
    alt: 'Sample Audio', 
    username: 'user5', 
    date: '2024-11-05',
    userImage: '/assets/Ellipse 51.png' // User image for user5
  },
  { 
    type: 'video', 
    src: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    alt: 'Sample Video', 
    username: 'user2', 
    date: '2024-11-02',
    userImage: '/assets/Ellipse 52.png' // User image for user2
  },
  { 
    type: 'text', 
    content: 'This is a sample text content.', 
    username: 'user12', 
    date: '2024-11-12',
    userImage: '/assets/Ellipse 54.png' // User image for user12
  }, // New text item
  { 
    type: 'image', 
    src: '/assets/1.jpeg', 
    alt: 'Random Image 1', 
    username: 'user3', 
    date: '2024-11-03',
    userImage: '/assets/Ellipse 61.png' // User image for user3
  },
  { 
    type: 'image', 
    src: '/assets/download (18).jpeg', 
    alt: 'Random Image 3', 
    username: 'user4', 
    date: '2024-11-04',
    userImage: '/assets/Ellipse 62.png' // User image for user4
  },
  { 
    type: 'audio', 
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 
    alt: 'Sample Audio', 
    username: 'user5', 
    date: '2024-11-05',
    userImage: '/assets/Ellipse 63.png' // User image for user5
  },
  { 
    type: 'video', 
    src: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    alt: 'Sample Video 2', 
    username: 'user6', 
    date: '2024-11-06',
    userImage: '/assets/Ellipse 70.png' // User image for user6
  },
  { 
    type: 'image', 
    src: '/assets/download (17).jpeg', 
    alt: 'Random Image 2', 
    username: 'user7', 
    date: '2024-11-07',
    userImage: '/assets/Ellipse 52.png' // User image for user7
  },
  { 
    type: 'image', 
    src: '/assets/download (18).jpeg', 
    alt: 'Random Image 3', 
    username: 'user8', 
    date: '2024-11-08',
    userImage: '/assets/Ellipse 54.png' // User image for user8
  },
];

const GridLayout1 = () => {
  const [filter, setFilter] = useState('All'); // State to track the selected filter
  
  // Function to handle filter button click
  const handleClick = (filterType) => {
    console.log(`Selected Filter: ${filterType}`); // Debugging the selected filter
    setFilter(filterType);
  };

  // Filter media items based on the selected filter
  const filteredMediaItems = mediaItems.filter((item) => {
    console.log(`Filtering ${item.type} against ${filter}`); // Debugging filter logic
    if (filter === 'All') return true;
    return item.type === filter.toLowerCase();
  });

  const getIcon = (type) => {
    switch (type) {
      case 'image':
        return <img src="/assets/image_icon.png" alt="Image Icon" style={{ width: '24px', height: '24px' }} />;
      case 'video':
        return <img src="/assets/video_icon.png" alt="Video Icon" style={{ width: '24px', height: '24px' }} />;
      case 'audio':
        return <img src="/assets/audio_icon.png" alt="Audio Icon" style={{ width: '19.71px', height: '24px' }} />;
      case 'text':
        return <img src="/assets/text_icon.png" alt="Text Icon" style={{ width: '32px', height: '24px' }} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: 2 }}>
      {/* Search and Filter Controls */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        {/* Search Field (Left) */}
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


        {/* Filter Buttons (Center) */}
       <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
  <Button
    variant="contained"
    onClick={() => handleClick('All')}
    sx={{
      textTransform: 'none', 
      backgroundColor: filter === 'All' ? 'white' : '#2B3672',
      color: filter === 'All' ? 'black' : 'white',
      borderRadius: '20px', // Round the edges
      margin: '0 8px', // Add space between buttons
      '&:hover': {
        backgroundColor: filter === 'All' ? 'white' : '#2B3672', // Keep hover consistent
        color: filter === 'All' ? 'black' : 'white',
      },
    }}
  >
    All
  </Button>
  <Button
    variant="contained"
    onClick={() => handleClick('Image')}
    sx={{
      textTransform: 'none', 
      backgroundColor: filter === 'Image' ? 'white' : '#2B3672',
      color: filter === 'Image' ? 'black' : 'white',
      borderRadius: '20px', // Round the edges
      margin: '0 8px', // Add space between buttons
      '&:hover': {
        backgroundColor: filter === 'Image' ? 'white' : '#2B3672', // Keep hover consistent
        color: filter === 'Image' ? 'black' : 'white',
      },
    }}
  >
    Image
  </Button>
  <Button
    variant="contained"
    onClick={() => handleClick('Video')}
    sx={{
      textTransform: 'none', 
      backgroundColor: filter === 'Video' ? 'white' : '#2B3672',
      color: filter === 'Video' ? 'black' : 'white',
      borderRadius: '20px', // Round the edges
      margin: '0 8px', // Add space between buttons
      '&:hover': {
        backgroundColor: filter === 'Video' ? 'white' : '#2B3672', // Keep hover consistent
        color: filter === 'Video' ? 'black' : 'white',
      },
    }}
  >
    Video
  </Button>
  <Button
    variant="contained"
    onClick={() => handleClick('Audio')}
    sx={{
      textTransform: 'none', 
      backgroundColor: filter === 'Audio' ? 'white' : '#2B3672',
      color: filter === 'Audio' ? 'black' : 'white',
      borderRadius: '20px', // Round the edges
      margin: '0 8px', // Add space between buttons
      '&:hover': {
        backgroundColor: filter === 'Audio' ? 'white' : '#2B3672', // Keep hover consistent
        color: filter === 'Audio' ? 'black' : 'white',
      },
    }}
  >
    Audio
  </Button>
  <Button
    variant="contained"
    onClick={() => handleClick('Text')}
    sx={{
      textTransform: 'none', 
      backgroundColor: filter === 'Text' ? 'white' : '#2B3672',
      color: filter === 'Text' ? 'black' : 'white',
      borderRadius: '20px', // Round the edges
      margin: '0 8px', // Add space between buttons
      '&:hover': {
        backgroundColor: filter === 'Text' ? 'white' : '#2B3672', // Keep hover consistent
        color: filter === 'Text' ? 'black' : 'white',
      },
    }}
  >
    Text
  </Button>
</Box>



        {/* Other Button (Right) */}
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
    marginBottom: '20px' // Gap from the right side
  }}
/>

      {/* Media Grid */}
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {filteredMediaItems.map((item, index) => (
          <Paper
            key={index}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              backgroundColor: '#2B3672',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Card Header */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 16px',
                backgroundColor: '#2B3672',
                color: 'white',
              }}
            >
              {/* Media Icon and Text */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 1 }}>{getIcon(item.type)}</Box>
                <Box>
                  <Typography variant="body2">{item.username}</Typography>
                  <Typography variant="caption">{format(new Date(item.date), 'MMM dd, yyyy')}</Typography>
                </Box>
              </Box>

              {/* User Avatar */}
              <Avatar src={item.userImage} alt={item.username} sx={{ width: 32, height: 32 }} />
            </Box>

            {/* Media Content */}
            <Box sx={{ padding: '16px' }}>
              {item.type === 'image' && <img src={item.src} alt={item.alt} style={{ width: '100%' }} />}
              {item.type === 'video' && (
                <video controls width="100%" style={{ maxHeight: '200px' }}>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {item.type === 'audio' && (
                <audio controls style={{ width: '100%' }}>
                  <source src={item.src} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              )}
              {item.type === 'text' && <Typography>{item.content}</Typography>}
            </Box>

            <Divider sx={{ backgroundColor: '#3A4975' }} />
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default GridLayout1;
