// src/components/OrderStats.js

import React from "react";
import {
  FaClipboardList,
  FaTimesCircle,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

const OrderStats = () => {
  const stats = {
    totalOrders: 20,
    cancelledOrders: 3,
    completedOrders: 50,
    totalGuests: 124,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {/* Total Orders */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800">Total Orders</h3>
          <p className="text-lg font-semibold text-blue-600">
            {stats.totalOrders}
          </p>
        </div>
        <FaClipboardList className="text-blue-600 text-4xl" />
      </div>

      {/* Cancelled Orders */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800">Cancelled Orders</h3>
          <p className="text-lg font-semibold text-red-600">
            {stats.cancelledOrders}
          </p>
        </div>
        <FaTimesCircle className="text-red-600 text-4xl" />
      </div>

      {/* Completed Orders */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800">Completed Orders</h3>
          <p className="text-lg font-semibold text-green-600">
            {stats.completedOrders}
          </p>
        </div>
        <FaCheckCircle className="text-green-600 text-4xl" />
      </div>

      {/* Total Guests */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800">Total Guests</h3>
          <p className="text-lg font-semibold text-yellow-600">
            {stats.totalGuests}
          </p>
        </div>
        <FaUsers className="text-yellow-600 text-4xl" />
      </div>
    </div>
  );
};

export default OrderStats;
