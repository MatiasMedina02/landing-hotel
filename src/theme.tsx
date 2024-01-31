import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "white",
        }
      }
    }
  }
});

export default theme
