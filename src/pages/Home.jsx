import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { getHomeBlogs } from "../api/blog";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

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
      <Typography variant="h4" gutterBottom>
        Recent Posts
      </Typography>
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
