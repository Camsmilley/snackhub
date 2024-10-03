import React, { useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
            Contact Us
          </h1>
          <p className="mb-4 text-green-500"></p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white p-2 rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
