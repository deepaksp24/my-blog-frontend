import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography, Paper } from "@mui/material";
import { loginUser } from "../api/blog";

function Register() {
  const [username, setUsername] = useState();
  const [displayname, setDisplayname] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegsiter = async (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Register
            </Typography>
            <form onSubmit={handleRegsiter}>
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Display name"
                fullWidth
                margin="normal"
                value={displayname}
                onChange={(e) => setEmail(e.target.value)}
              />
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
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Register;
