import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, TextField, Button, Typography, Paper } from "@mui/material";
import { loginUser, verifyUser } from "../api/blog";
import { useUser } from "../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useUser();
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userData = await loginUser({ email, password });
      localStorage.setItem("token", userData.access_token);

      const res = await verifyUser(userData.access_token);
      if (res) { 
        setUser({
          username: res.username,
          email: res.email,
        });

        navigate("/");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Login failed:", err);
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
