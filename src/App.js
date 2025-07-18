import { Container } from "@mui/material";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import Register from "./pages/Register";

function App({ toggleColorMode }) {
  return (
    <UserProvider>
      <Navbar toggleColorMode={toggleColorMode} />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </UserProvider>
  );
}

export default App;
