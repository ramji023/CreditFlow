import { useState } from 'react';
import { TrendingUp, Wallet, HandCoins, Clock } from 'lucide-react';
import { NavLink, useMatch } from 'react-router-dom';
const Sidebar = () => {
    const isDashboard = useMatch("/home")
    return (
        <>
            <div className="fixed inset-y-0 left-0 w-60  bg-white pt-16">
                <nav className="mt-5 px-2">
                    <NavLink
                        to="/home"
                        className={`group flex items-center px-2 py-2 text-lg font-medium rounded-md ${
                            isDashboard ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                          }`}
                    >
                        <TrendingUp className="mr-3 h-5 w-5" />
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="transactions"
                        className={({ isActive }) =>
                            `group flex items-center px-2 py-2 text-lg font-medium rounded-md ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                            }`
                        }
                    >
                        <Wallet className="mr-3 h-5 w-5" />
                        Transactions
                    </NavLink>
                    <NavLink
                        to="budget"
                        className={({ isActive }) =>
                            `group flex items-center px-2 py-2 text-lg font-medium rounded-md ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                            }`
                        }
                    >
                        <HandCoins className="mr-3 h-5 w-5" />
                        Budgets
                    </NavLink>
                    <NavLink
                        to="reminder"
                        className={({ isActive }) =>
                            `group flex items-center px-2 py-2 text-lg font-medium rounded-md ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                            }`
                        }
                    >
                        <Clock className="mr-3 h-5 w-5" />
                        Reminders
                    </NavLink>
                </nav>
            </div>
        </>
    )
}

export default Sidebar