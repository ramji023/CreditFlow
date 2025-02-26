import React from "react";
import { Filter, ChevronDown, Search } from "lucide-react";

const ExpenseTable = () => {
  const data = [
    { id: 1, customer: "John Doe", amount: "$500", date: "2025-02-25", type: "credit", status: "completed" },
    { id: 2, customer: "Jane Smith", amount: "$300", date: "2025-02-24", type: "debit", status: "pending" },
    { id: 3, customer: "Alice Johnson", amount: "$700", date: "2025-02-23", type: "credit", status: "canceled" },
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl border border-gray-300 overflow-hidden p-8">
        {/* Search & Filters Row */}
        <div className="p-4 flex items-center justify-between border-b border-gray-300">
          {/* Search Field with Icon */}
          <div className="relative w-1/3">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-12 p-2 rounded-full w-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Right Side: Filter & Sort */}
          <div className="flex items-center space-x-4">
            {/* Filter Button */}
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
              <Filter className="w-4 h-4 text-gray-600" />
              <span>Filter</span>
            </button>

            {/* Sort Dropdown */}
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
              <span>Newest First</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Table Section */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 ">#</th> {/* Rounded top-left corner */}
              <th className="p-3">Customer/Description</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              {/* <th className="p-3 text-right">⋮</th> Rounded top-right corner */}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <React.Fragment key={item.id}>
                <tr className="text-sm font-medium">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{item.customer}</td>
                  <td className="py-2 px-4">{item.amount}</td>
                  <td className="py-2 px-4">{item.date}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${item.type === "credit" ? "bg-green-500" : "bg-red-500"
                        }`}
                    >
                      {item.type}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${item.status === "completed"
                        ? "bg-green-500"
                        : item.status === "pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-right cursor-pointer">⋮</td>
                </tr>

                {/* Extended horizontal line */}
                {index < data.length - 1 && (
                  <tr>
                    <td colSpan="7">
                      <hr className="w-11/12 mx-auto border-gray-300" />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;
