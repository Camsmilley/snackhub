const AddToCart = () => {
  const product = {
    name: "Delicious Snack",
    description: "A tasty snack that satisfies your cravings.",
    price: 100,
    image: "/img/pizza.jpg",
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-semibold mb-4">${product.price}</p>
      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          min="1"
          className="border border-gray-300 rounded px-2 py-1 w-16"
        />
      </div>
      <button className="w-full bg-green-700 text-white font-bold py-2 rounded hover:bg-green-400 transition duration-200">
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
