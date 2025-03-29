import { useEffect, useState } from "react";
import { X } from "lucide-react";
import categories from "../../utils/categories";

const AddTransaction = ({ setShowAddModal, transactionType }) => {
    const [transactions, setTransactions] = useState([])
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(() => {
        return new Date().toISOString().split('T')[0]
    });
    const [time, setTime] = useState(() => {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        return formattedTime;
    });
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [notes, setNotes] = useState('');
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSubcategoryOpen, setIsSubcategoryOpen] = useState(false);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSelectedSubcategory(null);
        setIsCategoryOpen(false);
    };

    const handleSubcategorySelect = (subcategory) => {
        setSelectedSubcategory(subcategory);
        setIsSubcategoryOpen(false);
    };

    // console.log("transaction type is : ", transactionType);

    // useEffect(() => {
    //     console.log("all transactions are : ", transactions);
    // }, [transactions])
    return (
        <>
            <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg mt-15 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-700 text-center flex-1">Add New Transaction</h2>
                    <button
                        onClick={() => setShowAddModal(false)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Amount Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Amount</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded mt-1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />
                </div>

                {/* Date Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Date</label>
                    <input
                        type="date"
                        className="w-full p-2 border rounded mt-1"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                {/* Time Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Time</label>
                    <input
                        type="time"
                        className="w-full p-2 border rounded mt-1"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>

                {/* Custom Category Dropdown */}
                <div className="mb-4 relative">
                    <label className="block text-sm font-medium">Category</label>
                    <div
                        className="w-full p-2 border rounded mt-1 flex items-center justify-between cursor-pointer"
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    >
                        {selectedCategory ? (
                            <div className="flex items-center gap-2">
                                <img src={selectedCategory.icon} alt={selectedCategory.name} className="w-10 h-10" />
                                <span>{selectedCategory.name}</span>
                            </div>
                        ) : (
                            <span className="text-gray-400">Select a category</span>
                        )}
                    </div>

                    {isCategoryOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-y-auto">
                            {categories
                                .filter((category) => category.type === transactionType)
                                .map((category) => (
                                    <div
                                        key={category.name}
                                        className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                                        onClick={() => handleCategorySelect(category)}
                                    >
                                        <img src={category.icon} alt={category.name} className="w-10 h-10" />
                                        <span>{category.name}</span>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>

                {/* Custom Subcategory Dropdown */}
                {selectedCategory?.subcategories && (
                    <div className="mb-4 relative">
                        <label className="block text-sm font-medium">Subcategory</label>
                        <div
                            className="w-full p-2 border rounded mt-1 flex items-center justify-between cursor-pointer"
                            onClick={() => setIsSubcategoryOpen(!isSubcategoryOpen)}
                        >
                            {selectedSubcategory ? (
                                <div className="flex items-center gap-2">
                                    <img src={selectedSubcategory.icon} alt={selectedSubcategory.name} className="w-10 h-10" />
                                    <span>{selectedSubcategory.name}</span>
                                </div>
                            ) : (
                                <span className="text-gray-400">Select a subcategory</span>
                            )}
                        </div>

                        {isSubcategoryOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-y-auto">
                                {selectedCategory.subcategories.map((subcategory) => (
                                    <div
                                        key={subcategory.name}
                                        className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                                        onClick={() => handleSubcategorySelect(subcategory)}
                                    >
                                        <img src={subcategory.icon} alt={subcategory.name} className="w-10 h-10" />
                                        <span>{subcategory.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Notes Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Notes (optional)</label>
                    <textarea
                        className="w-full p-2 border rounded mt-1"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Add a note"
                    ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                    <button
                        className="bg-gray-400 text-white px-4 py-2 rounded"
                        onClick={() => setShowAddModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => {
                            setTransactions((prev) => [
                                ...prev,
                                {
                                    transactionType,
                                    amount,
                                    date,
                                    time,
                                    category: selectedCategory?.name,
                                    subcategory: selectedSubcategory?.name,
                                    notes
                                }
                            ]);
                            // setShowAddModal(false);
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </>
    );
}

export default AddTransaction;