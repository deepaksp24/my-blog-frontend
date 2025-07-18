import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NoAccountsRounded } from "@mui/icons-material";
export default function AccountMenu() {
  const navigate = useNavigate();

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
      {/* <AccountCircleIcon sx={{ fontSize: 100 }} /> */}
      <NoAccountsRounded sx={{ fontSize: 100 }} />

      <Typography variant="h6" mt={2}>
        John Doe
      </Typography>
      <Typography variant="body2" color="text.secondary">
        johndoe@example.com
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 2, px: 4 }}
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
    </Box>
  );
}
