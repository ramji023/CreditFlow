import React from 'react'
import Navbar from '../Layout/Navbar'
import Sidebar from '../Layout/Sidebar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout