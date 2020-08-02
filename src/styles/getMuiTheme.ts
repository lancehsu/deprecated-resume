import { createMuiTheme } from '@material-ui/core';

const getMuiTheme = (darkMode: boolean) =>
  createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#673ab7',
      },
    },
    typography: {
      fontFamily: 'Helvetica Neue',
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 12,
    },
  });

export default getMuiTheme;
