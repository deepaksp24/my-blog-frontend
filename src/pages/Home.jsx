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
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
