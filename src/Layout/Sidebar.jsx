import { useState } from 'react';
import { TrendingUp, Wallet, Users, Clock } from 'lucide-react';
const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    return (
        <>
            <div className="fixed inset-y-0 left-0 w-60  bg-white pt-16">
                <nav className="mt-5 px-2">
                    <a
                        href="#"
                        className={`group flex items-center px-2 py-2 text-lg font-medium rounded-md ${activeTab === 'dashboard'
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        <TrendingUp className="mr-3 h-5 w-5" />
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className={`group flex items-center px-2 py-2 text-lg font-medium rounded-md ${activeTab === 'transactions'
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        onClick={() => setActiveTab('transactions')}
                    >
                        <Wallet className="mr-3 h-5 w-5" />
                        Transactions
                    </a>
                    <a
                        href="#"
                        className={`group flex items-center px-2 py-2 text-lg font-medium rounded-md ${activeTab === 'customers'
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        onClick={() => setActiveTab('customers')}
                    >
                        <Users className="mr-3 h-5 w-5" />
                        Customers
                    </a>
                    <a
                        href="#"
                        className={`group flex items-center px-2 py-2 text-lg font-medium rounded-md ${activeTab === 'reminders'
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        onClick={() => setActiveTab('reminders')}
                    >
                        <Clock className="mr-3 h-5 w-5" />
                        Reminders
                    </a>
                </nav>
            </div>
        </>
    )
}

export default Sidebar