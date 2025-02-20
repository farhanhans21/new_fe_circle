import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography:{
    fontFamily: "Roboto, Arial, sans-serif",
    
  },
  palette: {
    mode: "light",
    text:{
      primary: "#ffffff"
    },
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background:{
      default: "#000000",
      
    },

  },
});

export default theme;