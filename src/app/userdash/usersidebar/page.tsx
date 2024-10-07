import React from "react";
import {
  FaHome,
  FaUser,
  FaRegHeart,
  FaUtensils,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-50 text-black p-6">
      <h2 className="text-2xl font-bold mb-8 text-center">
        <span className="text-yellow-500">
          <a>Snack</a>
        </span>
        <span className="text-green-700 ">
          <a>Hub</a>
        </span>
      </h2>
      <ul>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center text-lg hover:text-green-700"
          >
            <FaHome className="mr-4" />
            Dashboard
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center text-lg hover:text-green-700"
          >
            <FaUser className="mr-4" />
            My Profile
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="flex items-center text-lg hover:text-red-700">
            <FaRegHeart className="mr-4" />
            Favorites
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center text-lg hover:text-yellow-500"
          >
            <FaUtensils className="mr-4" />
            My Snacks
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center text-lg hover:text-yellow-500"
          >
            <FaCog className="mr-4" />
            Settings
          </a>
        </li>
        <li className="mt-8">
          <a href="#" className="flex items-center text-lg hover:text-red-400">
            <FaSignOutAlt className="mr-4" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
