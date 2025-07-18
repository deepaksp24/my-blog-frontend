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
    // components: {
    //   MuiPopover: {
    //     styleOverrides: {
    //       paper: {
    //         backgroundColor:
    //           mode === "light"
    //             ? "rgba(255, 255, 255, 0.6)" // glassy white
    //             : "rgba(26, 45, 51, 0.3)", // tinted dark glass
    //         backdropFilter: "blur(10px)",
    //         WebkitBackdropFilter: "blur(10px)",
    //         borderRadius: 8,
    //         border:
    //           mode === "light"
    //             ? "1px solid rgba(255, 255, 255, 0.3)"
    //             : "1px solid rgba(255, 255, 255, 0.1)",
    //         boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    //       },
    //     },
    //   },
    // },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

export default getTheme;
