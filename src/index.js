import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import getTheme from "./theme";
import { flushSync } from "react-dom";

function Main() {
  const [mode, setmode] = useState("light");

  const toggleColorMode = () => {
    setmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App toggleColorMode={toggleColorMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
