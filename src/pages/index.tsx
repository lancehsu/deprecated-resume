import React, { useMemo, FC, useEffect, useState } from 'react';
import { Box, ThemeProvider, useMediaQuery, CssBaseline } from '@material-ui/core';
import getMuiTheme from '../styles/getMuiTheme';
import Resume from '../components/Resume';

import '../styles/global.css';
import DarkButton from '../components/DarkButton';

const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = useMemo(() => getMuiTheme(darkMode), [darkMode]);

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
          <DarkButton
            darkMode={darkMode}
            onClick={() => {
              setDarkMode((prev) => !prev);
            }}
          />
        </Box>
        <Resume />
      </Box>
    </ThemeProvider>
  );
};

export default App;
