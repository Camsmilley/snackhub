const EditProductForm = ({}) => {
  return (
    <form className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>

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
          accept=""
          className="block w-full p-2 border border-gray-300 rounded mt-1"
        />
      </label>

      <div className="mb-4 relative">
        <img src="" alt="Preview" className="w-full h-auto rounded" />
        <button
          type="button"
          className="absolute top-1 right-1  text-white rounded-full p-1"
        ></button>
      </div>

      <button
        type="submit"
        className="w-full mt-4 p-2 bg-green-700 text-white rounded hover:bg-green-400"
      >
        Update Product
      </button>
    </form>
  );
};

export default EditProductForm;
