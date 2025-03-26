import { useState } from "react";
import { X } from "lucide-react";
const AddTransaction = ({ setShowAddModal, setTransactions }) => {
    console.log("add transaction component mount")
    const [formData, setFormData] = useState({
        category: '',
        amount: '',
        dateTime: '',
        notes: '',
    })

    function handleChange(e) {
        console.log(e.target.value);
    }

    function handleSubmit() {

    }
    const categories = [];
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
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Category</label>
                        <select name="category" value={formData.category} onChange={handleChange} required className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option value="" disabled>Select Category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Amount</label>
                        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required placeholder="Enter amount" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Date & Time</label>
                        <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Notes (Optional)</label>
                        <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Add a note..." className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Add Transaction</button>
                </form>
            </div>
        </>
    );
}

export default AddTransaction;