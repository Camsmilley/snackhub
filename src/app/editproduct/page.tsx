// src/App.js
import React, { useState } from "react";
import EditProductForm from "../dashboard/editproduct";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <EditProductForm />
    </div>
  );
};

export default App;
