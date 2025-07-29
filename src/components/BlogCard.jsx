import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Box,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardMedia from "@mui/material/CardMedia";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";

import TagBar from "./TagBar";
import { getBlog } from "../api/blog";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        minWidth: 200,
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onClick={async () => {
        try {
          const response = await getBlog(blog.id);

          if (response.success) {
            navigate("/blog", {
              state: {
                blog: response.data,
                showSnackbar: true,
                snackbarMessage: response.message,
              },
            });
          }
        } catch (error) {
          console.error("Failed to load blog:", error);
        }
      }}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardContent>
          <Typography variant="h5">{blog.title}</Typography>
          <TagBar tags={blog.tags} maxTags={3} />
        </CardContent>
        <CardMedia
          component="img"
          height="100"
          image="https://picsum.photos/100"
          alt="image"
        />
      </CardActionArea>
      <CardActions
        sx={{
          justifyContent: "flex-end",
          px: 2,
          pb: 1,
        }}
      >
        <Box>{blog.user_name}</Box>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
