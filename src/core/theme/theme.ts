import { createTheme, Theme } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#7b1200',
    },
  },
});

export const theme: Theme = defaultTheme;
