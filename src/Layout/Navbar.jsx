import React, { useState } from "react";
import { Bell, CreditCard, MoveRight, User, ChevronDown, Settings, LogOut } from "lucide-react";

function Navbar() {
    const isAuthenticated = true;
    const [showUserMenu, setShowUserMenu] = useState(false);
    return (
        < nav className="bg-white fixed w-full z-10" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <CreditCard className="h-8 w-8 text-blue-600" />
                        <span className="ml-2 text-2xl font-bold text-gray-900">CreditFlow</span>
                    </div>

                    {isAuthenticated ? (<>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                                <Bell className="h-6 w-6" />
                                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
                            </button>
                            <div className="relative">
                                <button
                                    className="flex items-center space-x-2 text-gray-700"
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                >
                                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <User className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <span>John Doe</span>
                                    <ChevronDown className="h-4 w-4" />
                                </button>

                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white">
                                        <div className="py-1">
                                            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                <Settings className="h-4 w-4 mr-3" />
                                                Settings
                                            </a>
                                            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                <LogOut className="h-4 w-4 mr-3" />
                                                Sign out
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>) : (<>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-semibold transition flex items-end gap-2">
                            Get Started
                            <MoveRight size={20} />
                        </button>
                    </>)}
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
