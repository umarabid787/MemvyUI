import React, { useState } from 'react';
import { Box, Paper, Typography, Avatar, Button, TextField, Divider } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { format } from 'date-fns';
import { Link } from '@mui/material';
import { IconButton } from '@mui/material';

const mediaItems = [
  { 
    type: 'image', 
    src: '/assets/95ed528db41e7c00e1ed7fcb7f31e1cc.png', 
    alt: 'Random Image 1', 
    username:  (
      <Link href={`/user/${encodeURIComponent('Marek Novak')}`} color="white" underline="hover">
      Marek Novak
      </Link>
    ), 
    date: '2024-11-01',
    userImage: '/assets/Ellipse 63.png' // User image for user1
  },
  
  { 
    type: 'audio', 
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 
    alt: 'Sample Audio', 
    username: 
    (
      <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
     Johansson Daniela 
      </Link>
    ), 
    date: '2024-11-05',
    userImage: '/assets/Ellipse 51.png' // User image for user5
  },
  { 
    type: 'video', 
    src: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    alt: 'Sample Video', 
    username: (
      <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
    Daniela 
      </Link>
    ), 
    date: '2024-11-02',
    userImage: '/assets/Ellipse 52.png' // User image for user2
  },
  { 
    type: 'text', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a pellentesque massa. Nam eu tincidunt ipsum. Vivamus malesuada risus nec odio bibendum finibus. Etiam a metus nec ligula lobortis facilisis. Cras dui arcu, porta eget finibus vitae, laoreet id sem. Vivamus lectus orci, tincidunt id magna in, elementum mollis ipsum. Integer eu euismod leo. Aenean elementum quis ligula non consequat. Duis eu justo eget dolor hendrerit vulputate sed eget mauris. Proin congue, magna quis sodales venenatis, orci leo scelerisque velit, in ullamcorper nulla sapien non augue. Morbi dapibus eget mi sit amet consectetur. Phasellus consectetur faucibus quam in ullamcorper. Nullam in risus non lectus convallis eleifend. Donec ac sapien mauris. Nunc sagittis porta urna, vel pretium metus dignissim vel. Fusce eu '
, 
    username: (
      <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
    Daniela Rossi
      </Link>
    ),  
    date: '2024-11-12',
    userImage: '/assets/Ellipse 54.png' // User image for user12
  }, // New text item
  { 
    type: 'image', 
    src: '/assets/1.jpeg', 
    alt: 'Random Image 1', 
    username: (
      <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
    Marek Novak
      </Link>
    ), 
    date: '2024-11-03',
    userImage: '/assets/Ellipse 61.png' // User image for user3
  },
  { 
    type: 'image', 
    src: '/assets/download (18).jpeg', 
    alt: 'Random Image 3', 
    username: (
      <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
     Johansson  Svensson
      </Link>
    ),  
    date: '2024-11-04',
    userImage: '/assets/Ellipse 62.png' // User image for user4
  },
  { 
    type: 'audio', 
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 
    alt: 'Sample Audio', 
    username: (
      <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
    Emma  Svensson
      </Link>
    ),  
    date: '2024-11-05',
    userImage: '/assets/Ellipse 63.png' // User image for user5
  },
  { 
    type: 'video', 
    src: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    alt: 'Sample Video 2', 
    username: (
      <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
     Svensson 
      </Link>
    ),  
    date: '2024-11-06',
    userImage: '/assets/Ellipse 70.png' // User image for user6
  },
  { 
    type: 'image', 
    src: '/assets/download (17).jpeg', 
    alt: 'Random Image 2', 
    username: (
      <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
    Johan Svensson
      </Link>
    ), 
    date: '2024-11-07',
    userImage: '/assets/Ellipse 52.png' // User image for user7
  },
  { 
    type: 'image', 
    src: '/assets/download (18).jpeg', 
    alt: 'Random Image 3', 
    username: (
      <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
   Elena Petrova
      </Link>
    ),  
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
  {/* Search Field (Left) */}
  <TextField
    variant="outlined"
    placeholder="Search..."
    size="small"
    sx={{
      width: { xs: '100%', sm: '200px' }, // Full width on small screens
      '& .MuiOutlinedInput-root': {
        color: 'white',
        borderRadius: '20px',
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
        color: 'white',
        padding: '10px 20px',
      },
      '& .MuiInputBase-input': {
        backgroundColor: '#1A205A',
        borderRadius: '20px',
      },
    }}
  />

  {/* Filter Buttons (Center) */}
  <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
    {['All', 'Image', 'Video', 'Audio', 'Text'].map((label) => (
      <Button
        key={label}
        variant="contained"
        onClick={() => handleClick(label)}
        sx={{
          textTransform: 'none',
          backgroundColor: filter === label ? 'white' : '#2B3672',
          color: filter === label ? 'black' : 'white',
          borderRadius: '20px',
          margin: '8px',
          '&:hover': {
            backgroundColor: filter === label ? 'white' : '#2B3672',
            color: filter === label ? 'black' : 'white',
          },
        }}
      >
        {label}
      </Button>
    ))}
  </Box>

  {/* Other Button (Right) */}
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0, marginTop: { xs: 2, sm: 0 }, justifyContent: { xs: 'center', sm: 'initial' } }}>
    <Button size="small" sx={{ textTransform: 'none', color: 'white', '&:hover': { color: 'white' } }}>View</Button>
    <Button startIcon={<img src="/assets/waiting.png" alt="Waiting Icon" style={{ width: '13.5px', height: '18px' }} />} size="small" sx={{ textTransform: 'none', color: 'secondary', '&:hover': { color: 'white', '& img': { filter: 'brightness(0) saturate(100%) invert(100%)' } } }} />
    <Button startIcon={<img src="/assets/grid.png" alt="Grid View Icon" style={{ width: '18px', height: '18px' }} />} size="small" sx={{ textTransform: 'none', color: 'secondary', '&:hover': { color: 'white' } }} />
    <IconButton aria-label="menu" sx={{ color: 'secondary', '&:hover': { color: 'white' } }}>
      <img src="/assets/three_dot.png" alt="Menu Icon" style={{ width: '16px', height: '20px' }} />
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
                 <Typography
  variant="body2"
  sx={{
    fontFamily: 'PolySans Trial, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '19.2px',
    textAlign: 'left',
  }}
>
  {item.username}
</Typography>


<Typography
  variant="caption"
  sx={{
    fontFamily: 'PolySans Trial,san-serif',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '14.4px',
    textAlign: 'left',
  }}
>
  {/* {format(new Date(item.date), 'MMM dd, yyyy')} */}
</Typography>

                  <Typography variant="caption">{format(new Date(item.date), 'MMM dd, yyyy')}</Typography>
                </Box>
              </Box>

              {/* User Avatar */}
              {/* <Avatar src={item.userImage} alt={item.username} sx={{ width: 32, height: 32 }} /> */}
               <Link href={`/user/${encodeURIComponent(item.username.props.children)}`} underline="none">
    <Avatar src={item.userImage} alt={item.username.props.children} sx={{ width: 32, height: 32 }} />
  </Link>
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
              {/* {item.type === 'text' && <Typography>{item.content}</Typography>} */}
              {item.type === 'text' && (
  <Box
    sx={{
      maxHeight: '264px',
      width: '250px', // Set a max height for the text container
      overflow: 'hidden',
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '20px', // Height of the blur effect
        background: 'linear-gradient(to bottom, rgba(43, 54, 114, 0), #2B3672)', // Adjust gradient and color to match your theme
      },
    }}
  >
    <Typography
      variant="body2"
      color="white"
      sx={{
        fontFamily: 'PolySans Trial, sans-serif', // Apply PolySans Trial font
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '14.4px',
        textAlign: 'left',
        whiteSpace: 'pre-line', // Preserve line breaks in the text
      }}
    >
      {item.content}
    </Typography>
  </Box>
)}

            </Box>

            <Divider sx={{ backgroundColor: '#3A4975' }} />
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default GridLayout1;
