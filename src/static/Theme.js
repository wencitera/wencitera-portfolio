import { createTheme } from '@material-ui/core/styles';
import { primary, secondary } from './ColorPalette';

export const theme = createTheme({
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
});