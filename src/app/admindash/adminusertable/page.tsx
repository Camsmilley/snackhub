// src/components/UserTable.js
import React from "react";

const UserTable = () => {
  const users = [
    { id: 1, name: "Juan Dela Cruz", email: "juan@example.com", role: "User" },
    {
      id: 2,
      name: "Juana Dela Cuz",
      email: "juana@example.com",
      role: "Admin",
    },
    { id: 3, name: "Alice Guo", email: "alice@example.com", role: "User" },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">User Management</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="px-6 py-3 font-bold text-sm text-gray-600">ID</th>
              <th className="px-6 py-3 font-bold text-sm text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 font-bold text-sm text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 font-bold text-sm text-gray-600">
                Role
              </th>
              <th className="px-6 py-3 font-bold text-sm text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4 text-sm text-gray-700">{user.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{user.role}</td>
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

export default UserTable;
