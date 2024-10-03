import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex gap-16 p-4 bg-gray-200">
      <div className="flex text-lg font-semibold items-center">
        <span className="text-yellow-500">
          <a href="/">Snack</a>
        </span>{" "}
        <span className="text-green-700 ">
          <a href="/">Hub</a>
        </span>
      </div>
      <ul className="flex ml-auto items-center pl-96 gap-8">
        <li className="hover:text-green-700">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-green-700">
          <a href="/aboutus">About</a>
        </li>
        <li className="hover:text-green-700">Product</li>
        <li className="hover:text-green-700">
          <a href="/contactus"> Contact Us</a>
        </li>
        <li className="hover:text-green-700">
          <FiShoppingCart />
        </li>
      </ul>
      <div>
        <button className="bg-green-700 font-semibold rounded-lg text-white py-2 px-4 m-2 hover:bg-green-400">
          <a href="/signup">Signup</a>
        </button>
        <button className="bg-green-700 font-semibold rounded-lg text-white py-2 px-4  hover:bg-green-400">
          <Link href="/login">Login</Link>
        </button>
      </div>
      <div className="flex ml-auto items-center">
        <FaSearch />
        <input type="text" placeholder="search" />
      </div>
    </div>
  );
};

export default Navbar;
