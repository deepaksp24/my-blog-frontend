import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => {}}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">{blog.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.tags}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
