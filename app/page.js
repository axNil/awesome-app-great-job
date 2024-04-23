import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Chat from "@/app/components/Chat/Chat";

export default function Home() {
  return (
    <Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <header>
          <Typography variant="h3">Chat with Kanye</Typography>
        </header>
        <Chat />
      </Box>
    </Box>
  );
}
