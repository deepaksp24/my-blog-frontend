import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NoAccountsRounded } from "@mui/icons-material";
import { useUser } from "../context/UserContext";

export default function AccountMenu() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const isLoggedIn = user?.username && user?.email;

  console.log("Menu ", user);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: 2,
        borderRadius: 2,
        minWidth: 200,
        height: 300,
        padding: 2,
      }}
    >
      {isLoggedIn ? (
        <>
          <AccountCircleIcon sx={{ fontSize: 100 }} />
          <Typography variant="h6" mt={2}>
            {user.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, px: 4 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <NoAccountsRounded sx={{ fontSize: 100 }} />
          <Typography variant="h6" mt={2}>
            Guest
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Not logged in
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, px: 4 }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </>
      )}
    </Box>
  );
}
