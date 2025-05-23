import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-[#670D2F] text-white px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-bold"> Dashboard</div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Workspace</span>
          <img src="https://i.pravatar.cc/40" alt="avatar" className="h-8 w-8 rounded-full" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1">
       
       

        {/* Content */}
        <main className="flex-1 bg-[#F8EEDF] overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
