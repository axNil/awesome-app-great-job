import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function InputField({ sendMessage }) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSubmit();
      event.preventDefault();
    }
  };

  return (
    <Box width={534} display="flex" flexDirection="row">
      <Box flexGrow={1} marginRight={1}>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={2}
          sx={{ width: "100%" }}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </Box>

      <Box width={85} height={78}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ height: "100%", width: "100%" }}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
