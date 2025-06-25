import { Box, Chip } from "@mui/material";

export default function TagBar({ tags = [], maxTags = 3 }) {
  const displayTags = Array.isArray(tags) ? tags.slice(0, maxTags) : [];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: 0.5,
        minHeight: 32,
      }}
    >
      {displayTags.length > 0 ? (
        displayTags.map((tag, index) => (
          <Chip key={index} label={tag} size="small" />
        ))
      ) : (
        <Box sx={{ height: 24 }} /> // fallback spacing
      )}
    </Box>
  );
}
