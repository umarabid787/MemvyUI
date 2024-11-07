import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

const MediaModal = ({ open, onClose, mediaItem }) => {
  if (!mediaItem) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{mediaItem.username}</DialogTitle>
      <DialogContent>
        {mediaItem.type === 'image' && (
          <img src={mediaItem.src} alt={mediaItem.alt} style={{ width: '100%' }} />
        )}
        {mediaItem.type === 'audio' && <audio controls src={mediaItem.src} />}
        {mediaItem.type === 'video' && <video controls src={mediaItem.src} />}
        {mediaItem.type === 'text' && <Typography>{mediaItem.content}</Typography>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MediaModal;
