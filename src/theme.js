import { createTheme } from "@mui/material/styles";

const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#284266" : "#1a2d33", // San Juan
      },
      secondary: {
        main: mode === "light" ? "#7aaabd" : "#6090aa", // Neptune
      },
      background: {
        default: mode === "light" ? "#cdcbca" : "#41759c", // Cloud / Steel Blue
        paper: mode === "light" ? "#ffffff" : "#1a2d33", // paper background
      },
      text: {
        primary: mode === "light" ? "#000000" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

export default getTheme;
