import { Container } from "@mui/material";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import { SnackbarProvider } from "./context/SnackbarContext";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import Register from "./pages/Register";
import BlogEditorPage from "./pages/BlogEditorPage";

function App({ toggleColorMode }) {
  return (
    <UserProvider>
      <SnackbarProvider>
        <Navbar toggleColorMode={toggleColorMode} />
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blogeditor" element={<BlogEditorPage />} />
          </Routes>
        </Container>
      </SnackbarProvider>
    </UserProvider>
  );
}

export default App;
