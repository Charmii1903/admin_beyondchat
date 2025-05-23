const ChatWindow = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FFF8F1]">
      {messages.map((msg, idx) => (
        <div key={idx} className={`flex ${msg.from === "agent" ? "justify-end" : "justify-start"}`}>
          <div
            className={`p-3 rounded-lg max-w-sm ${
              msg.from === "agent" ? "bg-[#670D2F] text-white" : "bg-white text-pink-900"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
