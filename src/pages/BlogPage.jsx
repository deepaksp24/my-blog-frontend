import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AppSnackbar from "../components/Snackbar";

export default function BlogPage() {
  const location = useLocation();
  const { blog, showSnackbar, snackbarMessage } = location.state || {};

  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (showSnackbar) {
      setOpenSnackbar(true);
    }
  }, [showSnackbar]);

  return (
    <>
      <h1>{blog?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog?.content }} />

      <AppSnackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage || "Blog opened"}
        type="success"
      />
    </>
  );
}
