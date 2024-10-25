import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex gap-16 p-4 bg-gray-200">
      <div className="flex text-lg font-semibold items-center">
        <span className="text-yellow-500">
          <Link href="/">Snack</Link>
        </span>{" "}
        <span className="text-green-700 ">
          <Link href="/">Hub</Link>
        </span>
      </div>
      <ul className="flex ml-auto items-center pl-96 gap-8">
        <li className="hover:text-green-700">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-green-700">
          <Link href="/aboutus">About</Link>
        </li>
        <li className="hover:text-green-700">
          <Link href="/products">Product</Link>
        </li>
        <li className="hover:text-green-700">
          <Link href="/contactus"> Contact Us</Link>
        </li>
        <li className="hover:text-green-700">
          <Link href="addtocart">
            <FiShoppingCart />
          </Link>
        </li>
      </ul>
      <div>
        <button className="bg-green-700 font-semibold rounded-lg text-white py-2 px-4 m-2 hover:bg-green-400">
          <Link href="/signup">Signup</Link>
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
