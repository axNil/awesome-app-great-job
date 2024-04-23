import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f8eb0",
    },
    secondary: {
      main: "#9c27b0",
      contrastText: "#fff",
    },
    background: {
      default: "#e5edd8",
      paper: "#adeb9b",
    },
  },
});

export default theme;
