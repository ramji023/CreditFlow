import React from 'react'
import { Download, Upload } from 'lucide-react';
const Activities = () => {
    const transactions = [
        {
            id: 1,
            name: "Sarah Johnson",
            type: "credit",
            amount: 500,
            date: "2025-03-15",
            status: "pending",
            category: "Retail",
            notes: "Monthly payment"
        },
        {
            id: 2,
            name: "Michael Chen",
            type: "debit",
            amount: 200,
            date: "2025-03-14",
            status: "completed",
            category: "Services"
        },
        {
            id: 3,
            name: "Emily Brown",
            type: "credit",
            amount: 1000,
            date: "2025-03-13",
            status: "failed",
            category: "Wholesale"
        },
        {
            id: 4,
            name: "David Wilson",
            type: "debit",
            amount: 150,
            date: "2025-03-12",
            status: "completed",
            category: "Services"
        },
    ];

    return (
        <>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                    <h3 className="text-lg font-medium">Recent Activity</h3>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200">
                        {transactions.slice(0, 5).map((transaction) => (
                            <li key={transaction.id} className="p-6">
                                <div className="flex items-center space-x-4">
                                    <div className={`flex-shrink-0 rounded-full p-2 ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                                        }`}>
                                        {transaction.type === 'credit' ? (
                                            <Download className={`h-5 w-5 ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                                                }`} />
                                        ) : (
                                            <Upload className="h-5 w-5 text-red-600" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                            {transaction.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {transaction.category} • {transaction.date}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.status === 'completed'
                                            ? 'bg-green-100 text-green-800'
                                            : transaction.status === 'failed'
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {transaction.status}
                                        </span>
                                        <span className={`text-sm font-medium ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                            {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Activities