import React from 'react';
import { Box, Typography, Paper, Grid2 } from '@mui/material';

const mediaItems = [
  { type: 'image', src: '/assets/download.jpeg', alt: 'Random Image 1' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Sample Video' },
  { type: 'image', src: '/assets/1.jpeg', alt: 'Random Image 1' },
  { type: 'audio', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', alt: 'Sample Audio' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Sample Video 2' },
  { type: 'image', src: '/assets/download (17).jpeg', alt: 'Random Image 2' },
  { type: 'image', src: '/assets/download (18).jpeg', alt: 'Random Image 3' },
  { type: 'image', src: '/assets/download (19).jpeg', alt: 'Random Image 1' },
];

export default function GridLayout() {
  return (
    <Box sx={{ flexGrow: 1, padding: 10, display: 'flex', justifyContent: 'center' }}>
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
    </Box>
  );
}
