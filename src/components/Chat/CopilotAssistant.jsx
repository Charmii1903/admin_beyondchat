// src/components/Chat/CopilotAssistant.jsx
import { useState } from "react";

export default function CopilotAssistant({ onEnhance }) {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleEnhance = () => {
    if (!input.trim()) return;

    // Simulated AI enhancement (replace with actual API if needed)
    const enhanced = input
      .replace("pls", "please")
      .replace("u", "you")
      .replace("thx", "thanks")
      .replace(" asap", " as soon as possible");

    setSuggestion(enhanced);
  };

  const handleSend = () => {
    if (suggestion) {
      onEnhance(suggestion);
      setInput("");
      setSuggestion("");
    }
  };

  return (
    <div className="bg-[#F8EEDF] border-t border-gray-300 px-4 py-3">
      <h2 className="font-semibold text-[#670D2F] mb-2">Fin AI Copilot</h2>

      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2 text-pink-900"
      />

      {suggestion && (
        <div className="bg-white text-sm p-3 rounded shadow border border-[#670D2F] mb-2">
          <p className="text-gray-700 mb-1">Suggested:</p>
          <p className="text-[#670D2F] italic">"{suggestion}"</p>
          <button
            onClick={handleSend}
            className="mt-2 bg-[#670D2F] text-white px-3 py-1 rounded text-sm hover:opacity-90 transition"
          >
            Send to Chat
          </button>
        </div>
      )}

      <button
        onClick={handleEnhance}
        className="bg-[#670D2F] text-white w-full py-2 rounded hover:opacity-90 transition"
      >
        Enhance Message
      </button>
    </div>
  );
}
