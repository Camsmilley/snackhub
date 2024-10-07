// src/components/AdminDashboard.js
import React from "react";
import Sidebar from "../sidebar/page";
import DashboardHeader from "../admindasheader/page";
import UserTable from "../adminusertable/page";
import SnackTable from "../snacktable/page";
import OrderStats from "../orderstatus/page";

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
