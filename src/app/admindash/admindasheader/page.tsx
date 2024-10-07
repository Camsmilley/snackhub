// src/components/DashboardHeader.js
import React from "react";

const DashboardHeader = () => {
  const admin = {
    name: "Admin Name",
    profilePicture: "/img/avatar.png",
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 text-gray-700 p-6">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <img
          src={admin.profilePicture}
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-yellow-500"
        />
        <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-400">
          Edit Profile
        </button>
        <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-400">
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
