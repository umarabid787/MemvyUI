import React from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { format } from 'date-fns';

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

const GridLayout = () => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {mediaItems.map((item, index) => (
          <Paper
            key={index}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              backgroundColor: '#2B3672',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(255, 255, 255, 0.2)', // Light white border
            }}
          >
            {/* Card Header: Icon, Name, Date on Left; User Avatar on Right */}
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
              {/* Icon and Name, Date */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 1, color: 'white' }}>{getIcon(item.type)}</Box>
                <Box>
                  <Typography variant="body2">{item.username}</Typography>
                  <Typography variant="caption">
                    {format(new Date(item.date), 'MMM d, yyyy')}
                  </Typography>
                </Box>
              </Box>
              {/* User Icon/Avatar */}
              <Avatar 
                src={item.userImage} // Use user image from mediaItems
                alt={item.username}
                sx={{ width: 30, height: 30 }} 
              >
                {item.username[0].toUpperCase()} {/* Fallback to initials if image is not available */}
              </Avatar>
            </Box>

            {/* Media Content in Card */}
            <Box
              sx={{
                padding: 1,
                borderRadius: '0 0 8px 8px',
                backgroundColor: '#2B3672',
                color: 'white', // Ensure text within media content is white
              }}
            >
              {item.type === 'image' && (
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  sx={{
                    width: '100%',
                    height: Math.random() * 200 + 150,
                    objectFit: 'cover',
                  }}
                />
              )}
              {item.type === 'video' && (
                <Box
                  component="video"
                  controls
                  sx={{
                    width: '100%',
                    height: Math.random() * 200 + 150,
                    objectFit: 'cover',
                  }}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </Box>
              )}
              {item.type === 'audio' && (
                <Box sx={{ textAlign: 'center' }}>
                  <audio controls style={{ width: '100%' }}>
                    <source src={item.src} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </Box>
              )}
              {item.type === 'text' && (
                <Typography variant="body2" sx={{ padding: 1, color: 'white' }}>
                  {item.content}
                </Typography>
              )}
            </Box>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default GridLayout;
