import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row">
      {/* Login Button */}
      <motion.button
        onClick={handleLogin}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-4 right-4 md:top-6 md:right-6 bg-gradient-to-r from-[#670D2F] to-[#9C2C4B] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition-all duration-300 z-50"
      >
        <FaSignInAlt className="text-sm" />
        <span className="text-sm font-medium">Login</span>
      </motion.button>

      {/* Left Section */}
      <motion.div
        className="bg-[#670D2F] text-white w-full md:w-1/2 flex flex-col items-center justify-center p-10 text-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center bg-white bg-opacity-10 text-[#EF88AD] px-4 py-1 rounded-full text-sm mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="w-2 h-2 bg-[#EF88AD] rounded-full mr-2"></span>
          For Agents
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-semibold leading-tight"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          AI Copilot
        </motion.h1>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="bg-[#F8EEDF] w-full md:w-1/2 flex items-center justify-center p-6"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="bg-white w-full max-w-md md:max-w-lg rounded-xl shadow-md p-6 h-full max-h-[500px] md:h-96 overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Tab bar */}
          <div className="flex border-b border-gray-200 mb-6 gap-3">
            <button className="text-xs md:text-sm font-semibold text-white bg-[#670D2F] px-3 py-1 md:px-4 md:py-2 rounded hover:scale-105 transition-transform duration-300">
              AI Copilot
            </button>
            <button className="text-xs md:text-sm text-white bg-[#670D2F] px-3 py-1 md:px-4 md:py-2 rounded hover:scale-105 transition-transform duration-300">
              Details
            </button>
            <div className="ml-auto text-gray-400 mt-1 md:mt-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Copilot Message */}
          <div className="text-center mt-8 md:mt-12 mb-4">
            <motion.div
              className="flex justify-center mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <img
                src="https://img.icons8.com/ios-filled/50/bot.png"
                alt="AI Bot"
                className="h-10 w-10"
              />
            </motion.div>
            <motion.h2
              className="text-base md:text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Hi, I’m Fin AI Copilot
            </motion.h2>
            <motion.p
              className="text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Ask me anything about this conversation.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Welcome;
