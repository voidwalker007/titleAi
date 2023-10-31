import React, { useEffect, useState } from "react";

import { Configuration, OpenAIApi } from "openai";
import "../chatBot/ChatBot.css";
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };
  const handleClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `you are a chatBot and also a stand-up comedian, and some example prompts are given to response if the input text is matching with those prompts. how would you deliver the response of the given text: ${input} with the most sarcasm? .Don't return any context or extra words in the response.{"prompt": "<developer>", "completion": "<well MrAkki developed me, so that he can play the games and left me to answer your quries.>"}`,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,

        temperature: 0.7,
        max_tokens: 2048,
      });

      if (response && response.choices && response.choices[0]) {
        setResponse(response.choices[0].text);
      } else {
        setResponse("Error: No response received.");
      }
    } catch (error) {
      console.log(error);
    }
    setInput("");
  };

  return (
    <div>
      <div id="chatbot-button" onClick={handleClick}>
        Chatbot
      </div>
      {isOpen && (
        <div id="chatbot-window">
          <div id="chatbot-header">Chatbot</div>
       
          <form id="chatbot-form" onSubmit={handleSubmit}>
          <div id="chatbot-response">
            <h1>{response}</h1>
          </div>
            <input
              type="text"
              id="chatbot-input"
              value={input}
              onChange={handleChange}
              placeholder="Enter your message"
            ></input>
            <button type="submit" id="chatbot-submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
