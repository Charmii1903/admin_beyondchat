import { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex border-t bg-white gap-3 p-4">
      <input 
        type="text"
        className="flex-1 border px-4 py-2 rounded-lg text-pink-900"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        
      />
      <button type="submit" className="bg-[#670D2F] text-white px-4 py-2 rounded-r-lg">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
