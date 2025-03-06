import React, { useState } from "react";
import Table from "../components/Table";
import Navbar from "../components/header";
import Sidebar from "../components/sidebar";

const HomePAge = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
 
  return (
    <div className="flex min-h-screen  bg-gray-100">
      <Sidebar isOpen={sidebarOpen} />
      <div
        className={`flex-1 transition-transform duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <div className=" ">
          <Table sidebarOpen={sidebarOpen} />
        </div>
      </div>
    </div>
  );
};

export default HomePAge;
