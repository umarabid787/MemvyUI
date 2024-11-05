import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import Select from '@mui/material/Select';
import Header from './components/Header';
import Main from './components/Main';
import MenuItem from '@mui/material/MenuItem';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  

  return (
    <ThemeProvider theme={theme}>
    <div style={{backgroundColor:'#04071E', height:'100%'}}>
    <Header />
    <Main  />
    </div>
    </ThemeProvider>
  );
}

export default App;
