import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Chat from "@/app/components/Chat/Chat";

export default function Home() {
  return (
    <main>
      <Box>
        <Typography>Chat with Kanye</Typography>
        <Chat></Chat>
      </Box>
    </main>
  );
}
