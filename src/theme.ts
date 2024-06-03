import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#861ea3',
      },
    },
    typography: {
        fontFamily: "sans-serif"
    }
});
theme = responsiveFontSizes(theme);
export default theme;
