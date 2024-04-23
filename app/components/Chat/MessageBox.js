import { Paper, Box, Typography } from "@mui/material";

export default function MessageBox({ message }) {
  return (
    <Box display="flex" flexDirection="column" maxWidth="70%">
      <Typography variant="caption" sx={{ marginBottom: 0.5 }}>
        {message.name}
      </Typography>
      <Paper
        //variant="outlined"
        elevation={3}
        sx={{
          padding: "10px",
          wordBreak: "break-word", // Ensures long words will wrap and not overflow
          backgroundColor: message.align === "left" ? "#adeb9b" : "#d3dbd4",
        }}
      >
        {message.text}
      </Paper>
    </Box>
  );
}
