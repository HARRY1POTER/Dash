import { Bell, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = ({ toggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleSidebar(); 
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0">
      <div
        className={`${
          isSidebarOpen ? "left-[-20px]" : "left-[-35px]"
        } relative top-12  gap2`}
      >
        <button
          onClick={handleSidebarToggle}
          className="bg-white p-1 rounded-full"
        >
          <ChevronDown
            className={isSidebarOpen ? "-rotate-90 " : "rotate-90"}
            size={24}
          />
        </button>
      </div>
      <div className="flex justify-center items-center gap-5 py-[15.5px] px-2">
        <div className="flex justify-center items-center gap-2">
          <Bell size={20} className="cursor-pointer text-[#727272] " />
          <div className="text-[14px] p-1 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="m-0 font-medium">12</p>
          </div>
        </div>

        <span className="flex items-center gap-3 text-[14px] font-medium">
          AK Motors <ChevronDown className="mt-[0.125rem] cursor-pointer" />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
