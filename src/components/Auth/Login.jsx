import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("auth", "true");
      onLogin();
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  w-screen bg-[#F8EEDF] p-4">
      <motion.form
        onSubmit={handleLogin}
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white text-[#670D2F] p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Login
        </motion.h2>

        <motion.input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#670D2F] transition"
          required
          whileFocus={{ scale: 1.02 }}
        />

        <motion.input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-[#670D2F] transition"
          required
          whileFocus={{ scale: 1.02 }}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#670D2F] hover:bg-[#9C2C4B] text-white py-2 rounded-md font-medium transition duration-300"
        >
          Login
        </motion.button>
      </motion.form>
    </div>
  );
}
