import React, { useMemo, FC } from 'react';

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
      }),
    [prefersDarkMode]
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    </div>
  );
};

export default App;
