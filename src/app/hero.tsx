import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/img/snacks.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative z-10 text-center">
        <h5 className="text-base">Savor Joy</h5>
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-yellow-500">Snack</span>
          <span className="text-green-700">Hub</span>
        </h1>
        <p className="text-lg mb-8">
          Discover and enjoy the best snacks around
        </p>
        <Link
          href="/explore"
          className="bg-yellow-500 text-white hover:bg-yellow-300 py-2 px-6 rounded-lg text-lg font-semibold"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
