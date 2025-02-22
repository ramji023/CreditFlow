import React, { useState } from "react";
import { Sun, Moon, Bell, CreditCard } from "lucide-react";

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <header className="fixed w-full top-0 left-0 z-50 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
            <div className="container mx-auto flex items-center justify-between p-3">
                {/* Logo */}
                <div className="flex items-center">
                    <CreditCard className="h-10 w-10 text-blue-600" />
                    <span className="ml-2 text-3xl font-bold text-gray-900">CreditFlow</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-12">
                        <li>
                            <a href="#" className="text-lg hover:text-gray-600 transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-lg hover:text-gray-600 transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-lg hover:text-gray-600 transition-colors">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-lg hover:text-gray-600 transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Icons Section */}
                <div className="flex items-center space-x-4">
                    {/* Dark Mode Toggle */}
                    <button onClick={() => setDarkMode(!darkMode)} className="p-2">
                        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>

                    {/* Notification Icon */}
                    <button className="p-2 hover:text-gray-600">
                        <Bell size={24} />
                    </button>

                    {/* Login/Signup Button */}
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
