import React from "react";
import Image from "next/image";
import Navbar from "../navbar";
import Footer from "../footer";

const snacks = [
  {
    id: 1,
    name: "Chips (potato, tortilla, veggie)",
    description: "Crunchy and salty chips.",
    image: "/img/chips.jpg",
  },
  {
    id: 2,
    name: "Pretzels",
    description: "Delicious pretzel, give it a twist.",
    image: "/img/pretzels.jpg",
  },
  {
    id: 3,
    name: "Popcorn (buttered, cheese, caramel)",
    description: "A mix of various nuts.",
    image: "/img/popcorn.jpg",
  },
  {
    id: 4,
    name: "Nachos with dip (cheese, salsa)",
    description: "tortilla chips covered in melted cheese .",
    image: "/img/nachos.jpg",
  },
  {
    id: 5,
    name: "French fries",
    description: "Oven baked french fries.",
    image: "/img/fries.jpg",
  },
  {
    id: 6,
    name: "Burger",
    description: "Delicious Traeger smoked burgers.",
    image: "/img/burger.jpg",
  },
  {
    id: 7,
    name: "Chicken nuggets or tenders",
    description: "Crunchy and juicy.",
    image: "/img/nuggets.jpg",
  },
  {
    id: 8,
    name: "Mini Pizza",
    description: "Mini Party Pizza is the ultimate party food.",
    image: "/img/pizza.jpg",
  },
  {
    id: 9,
    name: "Wraps or sandwiches",
    description: "Pinwheel Sandwiches.",
    image: "/img/sandwich.jpg",
  },
  {
    id: 10,
    name: "Hotdogs",
    description: "a cooked sausage and a year-round favorite.",
    image: "/img/hotdog.jpg",
  },
  {
    id: 11,
    name: "Waffles or pancakes",
    description: "Yummy and pluffy.",
    image: "/img/waffle.jpg",
  },
  {
    id: 12,
    name: "Ice cream",
    description: "smooth and soft.",
    image: "/img/icecream.jpg",
  },
  {
    id: 13,
    name: "Soft drinks",
    description: "Refreshing and feeling lively.",
    image: "/img/softdrinks.jpg",
  },
  {
    id: 14,
    name: "Fresh fruit juices",
    description: "Freshly Squeezed Apple Juice.",
    image: "/img/juice.jpg",
  },
  {
    id: 15,
    name: "Iced coffee or tea",
    description: "brewing of tea and coffee.",
    image: "/img/tea.jpg",
  },
  {
    id: 16,
    name: "Smoothies",
    description: "Deliciously Cool Summer Smoothie.",
    image: "/img/smoothies.jpg",
  },
  {
    id: 17,
    name: "Bottled water",
    description: " stay hydrated and healthy.",
    image: "/img/water.jpg",
  },
  {
    id: 18,
    name: "Milkshakes",
    description: "Delicious, indulgent, and tastes like a milkshake.",
    image: "/img/milkshake.jpg",
  },
  // Add more snacks as needed
];

function page() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 ">
          <span className="text-green-700">Explore</span>{" "}
          <span className="text-yellow-500">Snacks</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {snacks.map((snack) => (
            <div
              key={snack.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={snack.image}
                alt={snack.name}
                width={400}
                height={250}
                layout="responsive"
                className="object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{snack.name}</h2>
                <p className="text-gray-600">{snack.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
