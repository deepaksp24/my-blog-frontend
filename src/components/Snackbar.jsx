// components/AppSnackbar.jsx
import { Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";

export default function AppSnackbar({
  message,
  type = "success",
  open,
  onClose,
}) {
  const [internalOpen, setInternalOpen] = useState(open);

  useEffect(() => {
    setInternalOpen(open);
  }, [open]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setInternalOpen(false);
    if (onClose) onClose();
  };

  return (
    <Snackbar
      open={internalOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
