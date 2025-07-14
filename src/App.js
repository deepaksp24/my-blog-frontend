import { Container } from "@mui/material";
import "./App.css";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import Register from "./pages/Register";

function App({ toggleColorMode }) {
  return (
    <>
      <Navbar toggleColorMode={toggleColorMode} />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
