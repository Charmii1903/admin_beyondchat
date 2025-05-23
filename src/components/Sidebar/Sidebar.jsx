import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-2">
        <NavLink to="/dashboard" className="hover:bg-gray-700 px-3 py-2 rounded">
          Conversations
        </NavLink>
      </nav>
    </div>
  );
}