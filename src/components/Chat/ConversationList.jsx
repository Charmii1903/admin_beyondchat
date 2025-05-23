const ConversationList = ({ conversations, selectedId, onSelect }) => {
  return (
    <div className="w-72 bg-white border-r p-4 overflow-y-auto">
      <h2 className="font-bold text-[#670D2F] text-lg mb-4">Conversations</h2>
      {conversations.map((conv) => (
        <div
          key={conv.id}
          className={`p-3 rounded-lg cursor-pointer mb-2 ${
            conv.id === selectedId ? "bg-[#670D2F] text-white" : "hover:bg-pink-700 bg-pink-800"
          }`}
          onClick={() => onSelect(conv.id)}
        >
          <p className="font-semibold">{conv.user}</p>
          <p className="text-sm text-white">{conv.lastMessage}</p>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
