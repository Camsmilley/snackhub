import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div>
      <div className="flex mt-12">
        <div className="flex-1 grid items-center">
          <div className="space-y-4 pr-20 pl-24 mx-auto text-left relative left-16">
            <h1 className="text-6xl font-bold text-green-700 ">
              Welcome to <span className="text-yellow-500">Snack</span> Hub!
            </h1>
          </div>
        </div>
        <div className="flex-1 grid items-center rounded-md overflow-hidden">
          <h5 className="max-w-[500px]">
            Discover and enjoy the best snacks around. Explore our wide range of
            tasty and healthy snacks, along with special offers and discounts
            just for you.
          </h5>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <img
          src="/img/snacks1.jpeg"
          alt=""
          className="max-w-full h-auto rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Welcome;
