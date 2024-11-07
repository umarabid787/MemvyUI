import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledDialogContent = styled(DialogContent)({
  backgroundColor: '#2B3672',
  color: 'white',
});

const StyledDialogTitle = styled(DialogTitle)({
  backgroundColor: '#2B3672',
  color: 'white',
});

const StyledDialogActions = styled(DialogActions)({
  backgroundColor: '#2B3672',
});

const MediaModal = ({ open, onClose, mediaItem }) => {
  if (!mediaItem) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      {/* <StyledDialogTitle>{mediaItem.username}</StyledDialogTitle>
      <StyledDialogTitle>{mediaItem.date}</StyledDialogTitle> */}
      <StyledDialogContent>
        {mediaItem.type === 'image' && (
          <img src={mediaItem.src} alt={mediaItem.alt} style={{ width: '100%' }} />
        )}
        {mediaItem.type === 'audio' && <audio controls src={mediaItem.src} />}
        {mediaItem.type === 'video' && <video controls src={mediaItem.src} />}
        {mediaItem.type === 'text' && <Typography>{mediaItem.content}</Typography>}
      </StyledDialogContent>
      <StyledDialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </StyledDialogActions>
    </Dialog>
  );
};

export default MediaModal;
