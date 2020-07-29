import React, { useMemo, FC, useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import { Box, createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';

const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'light',
        },
        typography: {
          fontFamily: 'Helvetica Neue',
          // In Chinese and Japanese the characters are usually larger,
          // so a smaller fontsize may be appropriate.
          fontSize: 12,
        },
      }),
    [prefersDarkMode]
  );

  useEffect(() => {
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    return () => window.addEventListener('contextmenu', (e) => e.preventDefault());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Container />
      </Box>
    </ThemeProvider>
  );
};

export default App;
