import { useState } from "react";
import { motion } from "framer-motion";

import Layout from "../components/Layout/Layout";
import ConversationList from "../components/Chat/ConversationList";
import ChatWindow from "../components/Chat/ChatWindow";
import MessageInput from "../components/Chat/MessageInput";
import AISuggestionPanel from "../components/Chat/AISuggestionPanel";
import CopilotAssistant from "../components/Chat/CopilotAssistant";

function Dashboard() {
  const [selectedId, setSelectedId] = useState(1);

  const conversations = [
  { id: 1, user: "Alice", lastMessage: "How do I reset my password?" },
  { id: 2, user: "Bob", lastMessage: "I can't find my invoice." },
];
 
  const [suggestions] = useState([
    "Can you clarify your issue?",
    "Here's how you can fix that...",
    "Would you like to schedule a call?",
  ]);

  const [conversationMessages, setConversationMessages] = useState({
  1: [
    { from: "user", text: "Hi, I need help with my order." },
    { from: "agent", text: "Sure! I'd be happy to assist." },
  ],
  2: [
    { from: "user", text: "I can't find my invoice." },
    { from: "agent", text: "Let me check that for you." },
  ],
});

const messages = conversationMessages[selectedId] || [];



 const handleSend = (text) => {
  setConversationMessages((prev) => ({
    ...prev,
    [selectedId]: [...(prev[selectedId] || []), { from: "agent", text }],
  }));
};

const handleEnhance = (enhancedMessage) => {
  setConversationMessages((prev) => ({
    ...prev,
    [selectedId]: [...(prev[selectedId] || []), { from: "agent", text: enhancedMessage }],
  }));
};
  return (
    <Layout>
      <div className="flex flex-col md:flex-row  min-h-screen bg-[#f4f4f4] overflow-hidden">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-1/4 border-r border-gray-200 bg-white"
        >
          <ConversationList
            conversations={conversations}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </motion.div>

        {/* Main Chat Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col flex-1 bg-white"
        >
          <ChatWindow messages={messages} />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border-t border-gray-200"
          >
            <AISuggestionPanel
              suggestions={suggestions}
              onSelect={handleSend}
              buttonStyle="bg-[#670D2F] text-white hover:bg-[#510a25]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border-t border-gray-200 p-4"
          >
            <MessageInput
              onSend={handleSend}
              buttonStyle="bg-[#670D2F] text-white hover:bg-[#510a25]"
            />
          </motion.div>
        </motion.div>

        {/* Copilot Assistant */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="hidden md:block w-full md:w-1/4 border-l border-gray-200 bg-[#F8EEDF]"
        >
          <CopilotAssistant onEnhance={handleEnhance} />
        </motion.div>
      </div>
    </Layout>
  );
}

export default Dashboard;
