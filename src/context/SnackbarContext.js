import { createContext, useState, useContext } from "react";
import AppSnackbar from "../components/Snackbar";
const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export function SnackbarProvider({ children }) {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const showSnackbar = (message, type = "success") => {
    setSnackbar({ open: true, message, type });
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <AppSnackbar
        open={snackbar.open}
        onClose={closeSnackbar}
        message={snackbar.message}
        type={snackbar.type}
      />
    </SnackbarContext.Provider>
  );
}
