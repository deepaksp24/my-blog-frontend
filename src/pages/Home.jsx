import { useEffect, useState } from "react";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { getHomeBlogs } from "../api/blog";

import EditSquareIcon from "@mui/icons-material/EditSquare";
export default function Home() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const handleCreatePost = () => {
    navigate("/blogeditor");
  };

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await getHomeBlogs();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setBlogs(null);
      }
    };

    loadBlogs();
  }, []);

  return (
    <>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          justifyContent: "space-between", // Pushes children to opposite ends
          alignItems: "center", // Vertically centers items (optional)
        }}
      >
        <Typography variant="h4" gutterBottom>
          Recent Posts
        </Typography>
        <IconButton onClick={handleCreatePost}>
          <EditSquareIcon style={{ fontSize: 25 }} />
        </IconButton>
      </Box>
      <Grid container spacing={2}>
        {blogs === null ? (
          <Typography color="error">
            🚨 Failed to load posts. Backend may be down.
          </Typography>
        ) : blogs.length === 0 ? (
          <Typography>No Recent Posts</Typography>
        ) : (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        )}
      </Grid>
    </>
  );
}
