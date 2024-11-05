import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

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

const GridLayout = () => {
  return (
    <Box sx={{ width: '100%', padding: 2, display: 'flex', justifyContent: 'center' }}>
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {mediaItems.map((item, index) => (
          <Paper
            key={index}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Media content with varying heights */}
            {item.type === 'image' && (
              <Box
                component="img"
                src={item.src}
                alt={item.alt}
                sx={{
                  width: '100%',
                  height: Math.random() * 200 + 150, // Random height for varied layout
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
                  height: Math.random() * 200 + 300, // Random height for videos as well
                  objectFit: 'cover',
                }}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </Box>
            )}
            {item.type === 'audio' && (
              <Box sx={{ textAlign: 'center', padding: 1 }}>
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
        ))}
      </Masonry>
    </Box>
  );
};

export default GridLayout;
