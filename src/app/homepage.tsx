import React from "react";
import Navbar from "@/app/navbar";
import Hero from "./hero";
import Card from "./card";
import Welcome from "./welcom";
import Footer from "./footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Welcome />
      <Footer />
    </div>
  );
};

export default Homepage;
