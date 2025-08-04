import React, { useState } from "react";
import { Send, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi Preetha 👋, nice to see you back! Is there something I can help you with?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chatbot Box */}
      {isOpen && (
        <div
          className="w-80 h-96 flex flex-col rounded-2xl shadow-2xl border border-white/20
                     bg-gradient-to-br from-purple-600/70 via-blue-500/60 to-purple-700/70
                     backdrop-blur-xl text-white overflow-hidden mb-3 animate-fadeIn"
        >
          {/* Header */}
          <div className="px-4 py-2 bg-white/10 border-b border-white/20 flex justify-between items-center">
            <h2 className="font-semibold">Alyyooo Chatbot 🤖</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-red-400 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${
                  msg.sender === "bot"
                    ? "bg-purple-500/80 text-white self-start"
                    : "bg-blue-600/80 text-white self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-2 border-t border-white/20 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Bot Button (always visible) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-500
                   flex items-center justify-center shadow-lg hover:scale-110 transition text-2xl"
      >
        🤖
      </button>
    </div>
  );
};

export default Chatbot;
