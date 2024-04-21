"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import MessageBox from "./MessageBox";
import InputField from "./InputField";

export default function Chat() {
  const [messages, setMessage] = useState([]);

  const addClientMessage = (text) => {
    const message = { name: "You", text: text, align: "left" };
    setMessage((prevMessages) => [...prevMessages, message]);
  };

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
      <InputField sendMessage={addClientMessage}></InputField>
    </Box>
  );
}
