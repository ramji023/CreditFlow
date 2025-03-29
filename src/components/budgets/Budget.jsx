import { useState } from "react";

const Budget = () => {
    const [budgetItems, setBudgetItems] = useState([
        { name: "Rent", amount: "₹8,000" },
        { name: "Groceries", amount: "₹3,000" }
    ]); // Empty array means no budget added yet

    return (
        <>
            {budgetItems.length === 0 ? (
                // No budget UI
                <div className="text-center flex flex-col items-center justify-center h-[60vh]">
                    <h1 className="text-2xl font-bold text-gray-900">Plan Your First Monthly Budget</h1>
                    <p className="text-gray-600 mt-2 max-w-md">
                        Set up your budget and start tracking your expenses. Click below to begin.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
                        + Add Budget
                    </button>
                </div>
            ) : (
                // Budget exists
                <div className=" p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-lg font-semibold text-gray-900">Your Monthly Budget</h1>
                        {/* Button appears in the top-right when budget exists */}
                        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
                            + Add Budget
                        </button>
                    </div>

                    {/* List of budget items */}
                    <ul className="space-y-3">
                        {budgetItems.map((item, index) => (
                            <li key={index} className="flex justify-between p-3 bg-gray-100 rounded-md">
                                <span className="text-gray-700">{item.name}</span>
                                <span className="font-medium text-gray-900">{item.amount}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Budget;
