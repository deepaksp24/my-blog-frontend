import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Popover,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import AccountMenu from "../components/AccountMenu";

export default function Navbar({ toggleColorMode }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textDecoration: "none" }}
          component={Link}
          to="/"
          color="inherit"
          underline="none"
        >
          My Blog
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <IconButton
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <PersonIcon style={{ fontSize: 30, color: "white" }} />
        </IconButton>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              backgroundColor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(26, 45, 51, 0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: 2,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <AccountMenu />
        </Popover>
      </Toolbar>
    </AppBar>
  );
}
