import { createMuiTheme, Theme } from '@material-ui/core';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    tablet: false;
    laptop: false;
    desktop: false;
  }
}

const getMuiTheme = (darkMode: boolean): Theme =>
  createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#009688',
      },
    },
    breakpoints: {
      values: {
        xs: 414, // iPhone
        sm: 550,
        md: 768, // iPad
        lg: 794, // A4
        xl: 1920,
      },
    },
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 12,
    },
  });

export default getMuiTheme;
