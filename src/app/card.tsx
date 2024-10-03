import React from "react";

const cards = [
  {
    title: "Delicious Snacks",
    description: "Explore our wide range of tasty snacks.",
    image: "/img/discover.jpeg", // Replace with your image path
    link: "#snacks",
  },
  {
    title: "Healthy Options",
    description: "Choose from our selection of healthy snacks.",
    image: "/img/discover2.jpeg", // Replace with your image path
    link: "#healthy",
  },
  {
    title: "Special Deals",
    description: "Check out our special offers and discounts.",
    image: "/img/discover3.jpeg", // Replace with your image path
    link: "#deals",
  },
];

const Card = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
          Discover Our Best Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-50 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-4">{card.description}</p>
                {/* <a
                  href={card.link}
                  className="inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg text-lg font-semibold"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
