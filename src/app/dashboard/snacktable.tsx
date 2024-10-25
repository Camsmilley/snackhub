// src/components/SnackTable.js
import React from "react";

const SnackTable = () => {
  const snacks = [
    { id: 1, name: "Chips", category: "Salty", price: "₱100" },
    { id: 2, name: "Chocolate", category: "Sweet", price: "₱200" },
    { id: 3, name: "Granola Bars", category: "Healthy", price: "₱150" },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">Snack Management</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="px-6 py-3 font-bold text-sm text-gray-600">ID</th>
              <th className="px-6 py-3 font-bold text-sm text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 font-bold text-sm text-gray-600">
                Category
              </th>
              <th className="px-6 py-3 font-bold text-sm text-gray-600">
                Price
              </th>
              <th className="px-6 py-3 font-bold text-sm text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {snacks.map((snack) => (
              <tr key={snack.id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4 text-sm text-gray-700">{snack.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {snack.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {snack.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {snack.price}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SnackTable;
