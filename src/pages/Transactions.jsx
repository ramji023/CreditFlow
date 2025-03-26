import React from 'react'
import { Plus, Search, Filter, MoreVertical } from 'lucide-react'


const Transactions = () => {

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
            <div className='p-6'>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Transactions</h2>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            <Plus className="h-5 w-5 mr-2" />
                            Add Transaction
                        </button>
                    </div>
                </div>

                {/* Search and Filter */}
                <div className="flex space-x-4 mb-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            className="pl-10 pr-4 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option>All Types</option>
                        <option>Credit</option>
                        <option>Debit</option>
                    </select>
                    <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option>All Categories</option>
                        <option>Retail</option>
                        <option>Wholesale</option>
                        <option>Services</option>
                    </select>
                    <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option>All Status</option>
                        <option>Completed</option>
                        <option>Pending</option>
                        <option>Failed</option>
                    </select>
                    <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-50 border border-gray-300">
                        <Filter className="h-5 w-5 mr-2" />
                        More Filters
                    </button>
                </div>

                {/* Transactions Table */}
                <div className="bg-white shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Customer
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{transaction.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.type === 'credit'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                            }`}>
                                            {transaction.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py- 4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{transaction.category}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">₹{transaction.amount}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{transaction.date}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.status === 'completed'
                                            ? 'bg-green-100 text-green-800'
                                            : transaction.status === 'failed'
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {transaction.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-gray-400 hover:text-gray-500">
                                            <MoreVertical className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Transactions