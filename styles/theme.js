import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#202C39',
    },
    secondary: {
      main: '#283845',
    },
    third: {
      main: '#283845',
    },
    fourth: {
      main: '#F2D492',
    },
    fifth: {
      main: '#F29559',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;