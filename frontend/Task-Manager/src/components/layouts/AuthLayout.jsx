import React from "react";
import UI_IMG from "../../assets/images/right.jpg";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - always visible */}
      <div className="w-full md:w-[60%] px-6 md:px-12 pt-8 pb-12 bg-white overflow-y-auto">
        <h2 className="text-lg font-medium text-black mb-4">Task Manager</h2>
        {children}
      </div>

      {/* Right side - hidden on screens < 768px (Tailwind's md breakpoint) */}
      <div className="md:flex md:w-[60%] h-full items-center justify-center">
        <img
          src={UI_IMG}
          alt="UI Preview"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
