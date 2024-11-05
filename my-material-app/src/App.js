import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Main from './components/Main';
import './App.css'; // Import the CSS file

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="ellipse-background">
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;