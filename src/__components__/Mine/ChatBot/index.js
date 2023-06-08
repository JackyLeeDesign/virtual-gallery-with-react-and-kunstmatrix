import React, { useState } from "react";
import axios from "axios";
import { OpenAI } from "@openai/api";

const openai = new OpenAI(process.env.REACT_APP_OPENAI_API_KEY);

const ChatBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) return;

    const response = await axios.post("/api/chat", { text: inputValue });
    const answer = response.data.answer;

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { text: inputValue, isUser: true },
      { text: answer, isUser: false },
    ]);
    setInputValue("");
  };

  return (
    <div className="chat-box">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "user-message" : "ai-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Type your message here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
