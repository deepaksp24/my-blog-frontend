import { useNavigate } from "react-router-dom";
import { postBlog } from "../api/blog";
import BlogEditor from "../components/BlogEditor";

export default function BlogEditorPage() {
  const navigate = useNavigate();
  const handleSave = async (payload) => {
    const result = await postBlog(payload);
    console.log(result);
    if (result.success) {
      navigate("/");
    }
  };
  return <BlogEditor onSave={handleSave} />;
}
