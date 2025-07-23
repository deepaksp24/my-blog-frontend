import React, { useState, useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function BlogEditor({ onSave }) {
  const [isActive, setIsActive] = useState({
    bold: false,
    italic: false,
    heading: false,
    highlight: false,
  });

  const editor = useEditor({
    extensions: [StarterKit, Highlight],
    content: "<p>Start writing your blog...</p>",
    onUpdate: ({ editor }) => {
      setIsActive({
        bold: editor.isActive("bold"),
        italic: editor.isActive("italic"),
        heading: editor.isActive("heading", { level: 2 }),
        highlight: editor.isActive("highlight"),
      });
    },
  });

  useEffect(() => {
    if (editor) {
      // Initial update of active states
      setIsActive({
        bold: editor.isActive("bold"),
        italic: editor.isActive("italic"),
        heading: editor.isActive("heading", { level: 2 }),
        highlight: editor.isActive("highlight"),
      });
    }
  }, [editor]);

  if (!editor) return null;

  const handleSave = () => {
    const html = editor.getHTML();
    if (onSave) onSave(html);
    console.log(html);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Blog Editor
      </Typography>

      {/* Toolbar */}
      <Stack direction="row" spacing={1} mb={2}>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          variant={isActive.bold ? "contained" : "outlined"}
        >
          Bold
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          variant={isActive.italic ? "contained" : "outlined"}
        >
          Italic
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          variant={isActive.heading ? "contained" : "outlined"}
        >
          H2
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          variant={isActive.highlight ? "contained" : "outlined"}
        >
          Highlight
        </Button>
      </Stack>

      {/* Editor content */}
      <Box
        sx={{
          border: "1px solid ",
          borderRadius: 2,
          padding: 2,
          minHeight: 200,
          mb: 2,
        }}
      >
        <EditorContent editor={editor} />
      </Box>

      <Button variant="contained" onClick={handleSave}>
        Save
      </Button>
    </Box>
  );
}
