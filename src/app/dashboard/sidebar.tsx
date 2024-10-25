// src/components/Sidebar.js
import React from "react";
import { FaTachometerAlt, FaUsers, FaBox, FaSignOutAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-50 text-black p-6">
      <h2 className="text-2xl font-bold mb-8 text-center">
        <span className="text-yellow-500">
          <a>Snack</a>
        </span>
        <span className="text-green-700 ">
          <a>Hub</a>
        </span>{" "}
      </h2>
      <ul>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center text-lg hover:text-green-700"
          >
            <FaTachometerAlt className="mr-4" />
            Dashboard
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center text-lg hover:text-green-700"
          >
            <FaUsers className="mr-4" />
            Users
          </a>
        </li>
        <li className="mb-4">
          <a
            href="/product1"
            className="flex items-center text-lg hover:text-green-700"
          >
            <FaBox className="mr-4" />
            Product
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center text-lg hover:text-green-700"
          >
            <FiShoppingCart className="mr-4" />
            Cart
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
