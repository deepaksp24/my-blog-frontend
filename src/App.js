import { Container } from "@mui/material";
import "./App.css";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";

function App({ toggleColorMode }) {
  return (
    <>
      <Navbar toggleColorMode={toggleColorMode} />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
