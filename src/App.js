import { Container } from "@mui/material";
import "./App.css";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App({ toggleColorMode }) {
  return (
    <>
      <Navbar toggleColorMode={toggleColorMode} />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
