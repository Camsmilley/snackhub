import React from "react";
import Sidebar from "../usersidebar/page";
import DashboardHeader from "../dashheader/page";

const UserDashboard = () => {
  const userSnacks = ["Chips", "Cookies", "Granola Bars", "Pretzels"];
  const recentActivity = [
    "Liked a new snack",
    "Added Chocolate to favorites",
    "Purchased Granola Bars",
    "Reviewed Cookies",
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-6">
        <DashboardHeader />

        {/* My Snacks Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">My Snacks</h2>
          <ul className="list-disc list-inside mt-4">
            {userSnacks.map((snack, index) => (
              <li key={index} className="text-gray-600">
                {snack}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Recent Activity
          </h2>
          <ul className="list-disc list-inside mt-4">
            {recentActivity.map((activity, index) => (
              <li key={index} className="text-gray-600">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
