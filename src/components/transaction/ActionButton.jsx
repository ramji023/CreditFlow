import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import AddTransaction from './AddTransaction';
const ActionButton = () => {
    const [showAddModel, setShowAddModel] = useState(false);
    const [transactionType, setTransactionType] = useState('');
    function handleButton(transactionType) {
        setShowAddModel((prev) => !prev);
        setTransactionType(transactionType);
    }
    return (
        <>
            <div className="relative">
                <div className="fixed bottom-6 right-6 flex flex-col gap-4">
                    <button
                        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
                        onClick={() => handleButton("income")}
                    >
                        <Plus className="w-6 h-6" />
                    </button>
                    <button
                        className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition"
                        onClick={() => handleButton("expense")}
                    >
                        <Minus className="w-6 h-6" />
                    </button>
                </div>
                {showAddModel && (
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        <AddTransaction setShowAddModal={setShowAddModel} transactionType={transactionType} />
                    </div>
                )}
            </div>
        </>
    )
}

export default ActionButton;