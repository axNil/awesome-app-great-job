import { Paper, Box, Typography } from "@mui/material";
import MessageBox from "./MessageBox";
import InputField from "./InputField";

export default function Chat() {
  const messages = [
    { name: "Alice", text: "Hello", align: "left" },
    { name: "Bob", text: "Hi", align: "right" },
    { name: "Alice", text: "Whatsup", align: "left" },
    {
      name: "Bob",
      text: "I think I do myself a disservice by comparing myself to Steve Jobs and Walt Disney and human beings that we've seen before. It should be more like Willy Wonka...and welcome to my chocolate factory.",
      align: "right",
    },
    {
      name: "Alice",
      text: "Ipsum Pspkjopas ascaspm asc  asc asckpoasck ascokasc aopasc asockaosc apsok",
      align: "left",
    },
    {
      name: "Alice",
      text: "Ipsum Pspkjopas ascaspm asc  asc asckpoasck ascokasc aopasc asockaosc apsok",
      align: "left",
    },
    {
      name: "Alice",
      text: "Ipsum Pspkjopas ascaspm asc  asc asckpoasck ascokasc aopasc asockaosc apsok",
      align: "left",
    },
  ];

  return (
    <Box>
      <Box
        height={400}
        width={500}
        display="flex"
        flexDirection="column"
        padding={2}
        border={1}
        borderRadius={1}
        mb={1}
        sx={{
          overflowY: "auto", // Enables vertical scrolling
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent={
              message.align === "left" ? "flex-start" : "flex-end"
            }
            width="100%"
            mb={2} // Margin bottom for spacing between messages
          >
            <MessageBox message={message}></MessageBox>
          </Box>
        ))}
      </Box>
      <InputField></InputField>
    </Box>
  );
}
