import React, { useState } from "react";

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { user: "Alan", time: "18:30", text: "Hello" },
    { user: "me", time: "18:30", text: "Welcome to PDA Africa." },
    { user: "me", time: "18:30", text: "What questions do you have to ask?" },
    { user: "me", time: "18:30", text: "Do you need any Specific Responses?" },
  ]);

  const [currentMessage, setCurrentMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentMessage.trim() === "") return;
    const newMessage = {
      user: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: currentMessage,
    };
    setMessages([...messages, newMessage]);
    setCurrentMessage("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Chatbox</h3>
        <div className="relative">
          <i className="bx bx-dots-horizontal-rounded text-2xl cursor-pointer"></i>
          <ul className="absolute right-0 bg-white border rounded-lg shadow-lg hidden">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Save</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Remove
            </li>
          </ul>
        </div>
      </div>

      <div className="chat-box bg-gray-50 rounded-lg p-4 h-80 overflow-y-auto">
        <p className="text-center text-sm text-gray-500 mb-4">
          <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full">
            Today
          </span>
        </p>

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.user === "me" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            {msg.user !== "me" && (
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-8 h-8 rounded-full mr-2"
              />
            )}

            <div>
              <div className="flex items-center space-x-2">
                {msg.user !== "me" && (
                  <span className="text-sm font-bold text-gray-700">
                    {msg.user}
                  </span>
                )}
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>

              <p
                className={`mt-1 p-3 text-sm rounded-lg ${
                  msg.user === "me"
                    ? "bg-orange text-white"
                    : "bg-orange/85 text-white"
                }`}
              >
                {msg.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="Type..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <i className="bx bxs-send"></i>
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
