import React, { useMemo, FC, useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container';
import {
  Box,
  createMuiTheme,
  IconButton,
  ThemeProvider,
  Tooltip,
  useMediaQuery,
  CssBaseline
} from '@material-ui/core';
import { Brightness2, BrightnessHigh } from '@material-ui/icons';

const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily: 'Helvetica Neue',
          // In Chinese and Japanese the characters are usually larger,
          // so a smaller fontsize may be appropriate.
          fontSize: 12,
        },
      }),
    [darkMode]
  );

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  useEffect(() => {
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    return () => window.addEventListener('contextmenu', (e) => e.preventDefault());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App">
        <Box style={{ margin: '1em', display: 'flex', justifyContent: 'flex-end' }}>
        <Tooltip title={darkMode ? 'Light' : 'Dark'}>
          <IconButton
            onClick={() => {
              setDarkMode((prev) => !prev);
            }}
          >
            {darkMode ? <BrightnessHigh /> : <Brightness2 />}
          </IconButton>
        </Tooltip>
        </Box>
        <Container />
      </Box>
    </ThemeProvider>
  );
};

export default App;
