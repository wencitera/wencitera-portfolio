import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { primary, secondary } from './ColorPalette';

export const theme = createTheme(adaptV4Theme({
  palette: {
    background: {
      default: primary[500],
    },
    primary: {
      main: primary[500],
    },
    secondary: {
      main: secondary[800],
    },
  },
}));