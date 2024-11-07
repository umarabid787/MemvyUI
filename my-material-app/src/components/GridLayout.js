import React, { useState } from 'react';
import { Box, Paper, Typography, Avatar, Button, TextField, Divider } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { format } from 'date-fns';
import { Link } from '@mui/material';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

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
    userImage: '/assets/Ellipse 63.png'
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
    userImage: '/assets/Ellipse 51.png'
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
    userImage: '/assets/Ellipse 52.png'
  },
  { 
    type: 'text', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a pellentesque massa. Nam eu tincidunt ipsum. Vivamus malesuada risus nec odio bibendum finibus. Etiam a metus nec ligula lobortis facilisis. Cras dui arcu, porta eget finibus vitae, laoreet id sem. Vivamus lectus orci, tincidunt id magna in, elementum mollis ipsum. Integer eu euismod leo. Aenean elementum quis ligula non consequat. Duis eu justo eget dolor hendrerit vulputate sed eget mauris. Proin congue, magna quis sodales venenatis, orci leo scelerisque velit, in ullamcorper nulla sapien non augue. Morbi dapibus eget mi sit amet consectetur. Phasellus consectetur faucibus quam in ullamcorper. Nullam in risus non lectus convallis eleifend. Donec ac sapien mauris. Nunc sagittis porta urna, vel pretium metus dignissim vel. Fusce eu ',
    username: (
      <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
    Daniela Rossi
      </Link>
    ),  
    date: '2024-11-12',
    userImage: '/assets/Ellipse 54.png'
  },
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
    userImage: '/assets/Ellipse 61.png'
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
    userImage: '/assets/Ellipse 62.png'
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
    userImage: '/assets/Ellipse 63.png'
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
    userImage: '/assets/Ellipse 70.png'
  },
  { 
    type: 'image', 
    src: '/assets/Rectangle 158.png', 
    alt: 'Random Image 2', 
    username: (
      <Link href={`/user/${encodeURIComponent('Emma Johansson')}`} color="white" underline="hover">
    Johan Svensson
      </Link>
    ), 
    date: '2024-11-07',
    userImage: '/assets/Ellipse 52.png'
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
    userImage: '/assets/Ellipse 54.png'
  },
];

const GridLayout = () => {
  const [filter, setFilter] = useState('All');

  const handleClick = (filterType) => {
    setFilter(filterType);
  };

  const filteredMediaItems = mediaItems.filter((item) => {
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          sx={{
            width: '150px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#1A205A',
              color: 'white',
              borderRadius: '30px',
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
              padding: '10px 15px',
              fontSize: '0.9rem',
            },
            '& .MuiInputAdornment-root': {
              backgroundColor: '#1A205A',
              marginRight: '4px',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#B3BED4' }} />
              </InputAdornment>
            ),
          }}
        />
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
      </Box>
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
              cursor: 'pointer',
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
            <Box sx={{ padding: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt="user" src={item.userImage} sx={{ width: 24, height: 24, marginRight: 1 }} />
                <Typography variant="body2" sx={{ color: 'white' }}>
                  {item.username}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#B3BED4', fontSize: '0.9rem', mt: 1 }}>
                {format(new Date(item.date), 'MMM dd, yyyy')}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                {getIcon(item.type)}
                <Typography variant="body2" sx={{ marginLeft: 1, color: 'white' }}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default GridLayout;
