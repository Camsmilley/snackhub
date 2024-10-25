import React, { useState } from "react";

const AddProductForm = () => {
  return (
    <form className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Add New Product</h2>

      <label className="block mb-2">
        Product Name:
        <input
          type="text"
          name="name"
          className="block w-full p-2 border border-gray-300 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          className="block w-full p-2 border border-gray-300 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Price:
        <input
          type="number"
          name="price"
          className="block w-full p-2 border border-gray-300 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Upload Image:
        <input
          type="file"
          name="imageFile"
          accept="image/*"
          className="block w-full p-2 border border-gray-300 rounded mt-1"
        />
      </label>

      <div className="mb-4">
        <img src="" alt="Preview" className="w-full h-auto rounded" />
      </div>

      <button
        type="submit"
        className="w-full mt-4 p-2 bg-green-700 text-white rounded hover:bg-green-300"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
