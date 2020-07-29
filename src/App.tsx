import React, { useMemo, FC, useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import { createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';

const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
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
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    </div>
  );
};

export default App;
