import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  CardActions,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => {}}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">{blog.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.tags}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
