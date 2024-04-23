"use client";
import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import MessageBox from "./MessageBox";
import InputField from "./InputField";
import fetchMessage from "@/app/utils/kanye";

export default function Chat() {
  const [messages, setMessage] = useState([]);
  const endOfMessagesRef = useRef(null);

  const addClientMessage = (text) => {
    const message = { name: "You:", text: text, align: "left" };
    setMessage((prevMessages) => [...prevMessages, message]);
    addKanyeMessage(); // Trigger response from kanye
  };

  const addKanyeMessage = async () => {
    const text = await fetchMessage();
    const message = { name: "Kanye:", text: text, align: "right" };
    setMessage((prevMessages) => [...prevMessages, message]);
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
          overflowY: "auto", // Enables vertical scrolling for messages
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
            mb={2}
          >
            <MessageBox message={message}></MessageBox>
          </Box>
        ))}
        <div ref={endOfMessagesRef} />
      </Box>
      <InputField sendMessage={addClientMessage}></InputField>
    </Box>
  );
}
