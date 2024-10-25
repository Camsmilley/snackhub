// src/components/AdminDashboard.js
import React from "react";

import OrderStats from "./orderstatus";
import UserTable from "./usertable";
import SnackTable from "./snacktable";
import Sidebar from "./sidebar";
import DashboardHeader from "../user/userheader";

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-6">
        <DashboardHeader />

        <OrderStats />

        {/* User Management Section */}
        <UserTable />

        {/* Snack Management Section */}
        <SnackTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
