import { useState } from "react";
import dash from "../IMG/deler.png";
import Deal from "../IMG/Buildings.png";
import Cust from "../IMG/Handshake.png";
import Oder from "../IMG/FolderSimplePlus.png";
import Empl from "../IMG/Briefcase.png";
import Inve from "../IMG/TreasureChest.png";
import Full from "../IMG/GitPullRequest.png";
import Vehi from "../IMG/Vector.png";
import Serv from "../IMG/Wrench.png";

const sidebarItems = [
  { name: "Dashboard", icon: dash },
  { name: "Dealerships", icon: Deal },
  { name: "Customers", icon: Cust },
  { name: "All Orders", icon: Oder },
  { name: "Employees", icon: Empl },
];

const inventoryItems = [
  { name: "Inventory", icon: Inve },
  { name: "Fulfillment requests", icon: Full, notificationCount: 12 },
];

const Settings = [
  { name: "Vehicle Directory", icon: Vehi },
  { name: "Services Database", icon: Serv },
];

const Sidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState("All Orders");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white p-4 shadow-md transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <nav className="mt-[100px]">
        <ul>
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={`p-2 mt-1 flex items-center gap-3 cursor-pointer ${
                activeItem === item.name
                  ? "bg-[#FFE8E8] rounded-lg text-[#DF1F26]"
                  : "text-[#727272]"
              }`}
              onClick={() => handleItemClick(item.name)}
            >
              <img
                src={item.icon}
                alt={item.name}
                className={`w-5 h-5 ${
                  activeItem === item.name ? "opacity-80" : "opacity-100"
                }`}
              />
              <span className="text-[14px] ">{item.name}</span>
            </li>
          ))}

          <div className="border-t border-gray-300 my-3"></div>

          <li className="font-semibold text-[#727272] text-[12px] mb-1">
            Inventory Management
          </li>

          {inventoryItems.map((item, index) => (
            <li
              key={index}
              className={`p-2 mt-1 flex items-center gap-4 cursor-pointer ${
                activeItem === item.name
                  ? "bg-[#FFE8E8] rounded-lg text-[#DF1F26]"
                  : "text-[#727272]"
              }`}
              onClick={() => handleItemClick(item.name)}
            >
              <img
                src={item.icon}
                alt={item.name}
                className={`w-5 h-5 ${
                  activeItem === item.name ? "opacity-80 " : "opacity-100"
                }`}
              />
              <span className="text-[14px] ">{item.name}</span>

              {item.notificationCount && (
                <div className="ml-2 flex items-center justify-center w-6 h-6 bg-gray-200 text-black font-semibold rounded-full text-xs">
                  {item.notificationCount}
                </div>
              )}
            </li>
          ))}

          <div className="border-t border-gray-300 my-3"></div>

          <li className="font-semibold text-[#727272] text-[12px] mb-1">
            Settings
          </li>

          {Settings.map((item, index) => (
            <li
              key={index}
              className={`p-2 mt-1 flex items-center gap-3 cursor-pointer ${
                activeItem === item.name
                  ? "bg-[#FFE8E8] rounded-lg text-[#DF1F26]"
                  : "text-[#727272]"
              }`}
              onClick={() => handleItemClick(item.name)}
            >
              <img
                src={item.icon}
                alt={item.name}
                className={`w-5 h-5 ${
                  activeItem === item.name ? "opacity-80" : "opacity-100"
                }`}
              />
              <span className="text-[14px] ">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
