import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { getHomeBlogs } from "../api/blog";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getHomeBlogs().then(setBlogs);
  }, []);
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Recent Posts
      </Typography>
      <Grid container spacing={2}>
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </Grid>
    </>
  );
}
