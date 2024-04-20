import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function InputField() {
  return (
    <Box width={534} display="flex" flexDirection="row">
      <Box flexGrow={1} marginRight={1}>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={2}
          sx={{ width: "100%" }}
        />
      </Box>

      <Box width={85} height={78}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ height: "100%", width: "100%" }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
