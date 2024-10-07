import React from "react";

const DashboardHeader = () => {
  const user = {
    name: "Jane Doe",
    profilePicture: "/img/avatar.png",
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 text-black p-6">
      <h1 className="text-3xl font-semibold">
        <span className="text-gray-700">
          <a>Welcome back,</a>
        </span>{" "}
        <span className="text-green-700 ">
          <a>{user.name}!</a>
        </span>
      </h1>
      <div className="flex items-center space-x-4">
        <img
          src={user.profilePicture}
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
