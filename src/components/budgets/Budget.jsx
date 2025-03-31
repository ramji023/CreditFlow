import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react"
import AddBudget from "./AddBudget";
const Budget = () => {
    const [budgetItems, setBudgetItems] = useState([
        { name: "Rent", amount: "₹8,000" },
        { name: "Groceries", amount: "₹3,000" }
    ]);

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {budgetItems.length === 0 ? (
                // No budget UI
                <div className="text-center flex flex-col items-center justify-center h-[60vh]">
                    <h1 className="text-2xl font-bold text-gray-900">Plan Your First Monthly Budget</h1>
                    <p className="text-gray-600 mt-2 max-w-md">
                        Set up your budget and start tracking your expenses. Click below to begin.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
                        onClick={() => setOpenModal(true)}
                    >
                        + Add Budget
                    </button>
                </div>
            ) : (
                // Budget exists
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-lg font-semibold text-gray-900">Your Monthly Budget</h1>
                        {/* Button appears in the top-right when budget exists */}
                        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
                            onClick={() => setOpenModal(true)}
                        >
                            + Add Budget Item
                        </button>
                    </div>

                    {/* List of budget items */}
                    <ul className="space-y-3">
                        {budgetItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-100"
                            >
                                {/* Category Name */}
                                <span className="text-lg font-medium text-gray-900 w-1/4">{item.name}</span>

                                {/* Progress Bar */}
                                <div className="w-1/2 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full transition-all"
                                        style={{ width: "60%" }}
                                    ></div>
                                </div>

                                {/* Amount & Icons */}
                                <div className="flex items-center gap-4 w-1/4 justify-end">
                                    <span className="font-medium text-gray-900">{item.amount}</span>

                                    {/* Edit Button */}
                                    <button className="text-gray-500 hover:text-blue-600">
                                        <Pencil className="w-5 h-5" />
                                    </button>

                                    {/* Delete Button */}
                                    <button className="text-gray-500 hover:text-red-600">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {/* Modal Popup for Add Budget */}
            {openModal && (
                <div className="fixed inset-0 flex justify-center items-end md:items-center z-50 pb-4 md:pb-0">
                    <AddBudget
                        closeModel={() => setOpenModal(false)}
                        className="w-full md:max-w-2xl lg:max-w-4xl mx-auto h-[90vh] md:h-auto rounded-t-2xl md:rounded-lg shadow-xl"
                    />
                </div>
            )}
        </>
    );
};

export default Budget;
