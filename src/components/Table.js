import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { LuDownload } from "react-icons/lu";

const orders = [
  {
    date: "23-05-2025",
    orderId: "V-545454",
    dealership: "AK Motors",
    customer: "Aman Upadhyay",
    service: "General Service",
    mode: "Online",
    status: "In progress",
  },
  {
    date: "23-05-2025",
    orderId: "V-545455",
    dealership: "SR Motors",
    customer: "Suresh Kumar",
    service: "Express Service",
    mode: "Offline",
    status: "Completed",
  },
  {
    date: "23-05-2025",
    orderId: "V-545456",
    dealership: "AK Motors",
    customer: "Ravi Shankar",
    service: "Quick Fix",
    mode: "Online",
    status: "In progress",
  },
  {
    date: "23-05-2025",
    orderId: "V-545454",
    dealership: "AK Motors",
    customer: "Aman Upadhyay",
    service: "General Service",
    mode: "Online",
    status: "In progress",
  },
  {
    date: "01-06-2025",
    orderId: "V-545455",
    dealership: "SR Motors",
    customer: "Ravi Sharma",
    service: "Express Service",
    mode: "Offline",
    status: "Completed",
  },
  {
    date: "15-06-2025",
    orderId: "V-545456",
    dealership: "AK Motors",
    customer: "Neha Verma",
    service: "Quick Fix",
    mode: "Online",
    status: "In progress",
  },
  {
    date: "10-07-2025",
    orderId: "V-545457",
    dealership: "All",
    customer: "Sandeep Kumar",
    service: "Bike Inspection",
    mode: "Offline",
    status: "Completed",
  },
  {
    date: "20-07-2025",
    orderId: "V-545458",
    dealership: "SR Motors",
    customer: "Priya Yadav",
    service: "Bike Care",
    mode: "Online",
    status: "In progress",
  },
  {
    date: "12-08-2025",
    orderId: "V-545459",
    dealership: "AK Motors",
    customer: "Manish Patel",
    service: "General Service",
    mode: "Offline",
    status: "Completed",
  },
  {
    date: "25-08-2025",
    orderId: "V-545460",
    dealership: "SR Motors",
    customer: "Karan Singh",
    service: "Quick Fix",
    mode: "Online",
    status: "In progress",
  },
  {
    date: "05-09-2025",
    orderId: "V-545461",
    dealership: "AK Motors",
    customer: "Sonia Gupta",
    service: "Express Service",
    mode: "Offline",
    status: "Completed",
  },
  {
    date: "18-09-2025",
    orderId: "V-545462",
    dealership: "All",
    customer: "Vikas Thakur",
    service: "Bike Care",
    mode: "Online",
    status: "In progress",
  },
  {
    date: "30-09-2025",
    orderId: "V-545463",
    dealership: "SR Motors",
    customer: "Deepak Chauhan",
    service: "General Service",
    mode: "Offline",
    status: "Completed",
  },
];

const Table = ({ sidebarOpen }) => {
  const [selectedDealership, setSelectedDealership] = useState("All");
  const [selectedServiceType, setSelectedServiceType] = useState("All");
  const [selectedMode, setSelectedMode] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDealershipChange = (e) => setSelectedDealership(e.target.value);
  const handleServiceTypeChange = (e) => setSelectedServiceType(e.target.value);
  const handleModeChange = (e) => setSelectedMode(e.target.value);
  const handleStatusChange = (e) => setSelectedStatus(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase());

  const filteredOrders = orders.filter((order) => {
    const isDealershipMatch =
      selectedDealership === "All" || order.dealership === selectedDealership;
    const isServiceTypeMatch =
      selectedServiceType === "All" || order.service === selectedServiceType;
    const isModeMatch = selectedMode === "All" || order.mode === selectedMode;
    const isStatusMatch =
      selectedStatus === "All" || order.status === selectedStatus;
    const isSearchMatch =
      order.orderId.toLowerCase().includes(searchTerm) ||
      order.dealership.toLowerCase().includes(searchTerm) ||
      order.customer.toLowerCase().includes(searchTerm) ||
      order.service.toLowerCase().includes(searchTerm) ||
      order.mode.toLowerCase().includes(searchTerm) ||
      order.status.toLowerCase().includes(searchTerm);

    return (
      isDealershipMatch &&
      isServiceTypeMatch &&
      isModeMatch &&
      isStatusMatch &&
      isSearchMatch
    );
  });

  return (
    <>
      <p className="font-bold text-2xl mx-6 mt-6">All Orders</p>
      <div
        className={`bg-white m-6 rounded-lg overflow-x-scroll max-w- full   xl:max-w-none transition-all duration-300 ${
          sidebarOpen
            ? "lg:max-w-[720px] md:max-w-[460px] max-w-[150px] "
            : "md:max-w-[720px] lg:max-w-fit max-w-sm "
        }`}
      >
        <div className="p-5 ">
          {/* Filter */}
          <div className="flex flex-wrap gap-6 mb-6 text-[14px]">
            <p className={`self-center `}>Filter By:</p>

            <div className="max-w-xs">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Dealership</span>
                <select
                  value={selectedDealership}
                  onChange={handleDealershipChange}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none cursor-pointer"
                >
                  <option value="All">All</option>
                  <option value="AK Motors">AK Motors</option>
                  <option value="SR Motors">SR Motors</option>
                </select>
              </div>
            </div>

            <div className="max-w-xs">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Service Type</span>
                <select
                  value={selectedServiceType}
                  onChange={handleServiceTypeChange}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none cursor-pointer"
                >
                  <option value="All">All</option>
                  <option value="General Service">General Service</option>
                  <option value="Express Service">Express Service</option>
                  <option value="Quick Fix">Quick Fix</option>
                </select>
              </div>
            </div>

            <div className="max-w-xs">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Mode of Order</span>
                <select
                  value={selectedMode}
                  onChange={handleModeChange}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none cursor-pointer"
                >
                  <option value="All">All</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
            </div>

            <div className="max-w-xs">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Status</span>
                <select
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none cursor-pointer"
                >
                  <option value="All">All</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            <span className="mt-1.5 cursor-pointer">
              <LuDownload size={24} />
            </span>

            <div className="flex-1 max-w-xs">
              <form className="relative">
                <label htmlFor="default-search" className="sr-only">
                  Search
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search"
                  onChange={handleSearchChange}
                  value={searchTerm}
                  required
                />
              </form>
            </div>
          </div>

          {/* Table */}
          <div className="relativ e overflow-x-auto rounded-lg rounded-b-lg">
            <table className="w-full text-sm text-left text-black table-auto">
              <thead className="text-[14px] text-[#727272] font-normal bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 ">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Dealership
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Service Type
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Mode
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-[#f3f3f3]"
                  >
                    <td className="px-6 py-6 ">{order.date}</td>
                    <td className="px-6 py-6 ">{order.orderId}</td>
                    <td className="px-6 py-6 ">{order.dealership}</td>
                    <td className="px-6 py-6 ">{order.customer}</td>
                    <td className="px-6 py-6 ">{order.service}</td>
                    <td className="px-6 py-6 ">{order.mode}</td>
                    <td className="px-6 py-6  flex justify-center items-center">
                      <span
                        className={
                          order.status === "Completed"
                            ? "text-green-600 flex items-center bg-[#ebfce8] py-[3px] px-[15px] rounded-xl"
                            : "text-blue-600 bg-[#E2ECFF] py-[3px] px-[15px] rounded-xl flex items-center"
                        }
                      >
                        <GoDotFill className="mr-2" />
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
