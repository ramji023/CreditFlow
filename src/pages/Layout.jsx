import React from 'react'
import Navbar from '../Layout/Navbar'
import Sidebar from '../Layout/Sidebar'
import ActionButton from '../components/transaction/ActionButton'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <Sidebar />
                <main className="pl-60 pt-16">
                    {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"></div> */}
                    <Outlet />
                    <ActionButton/>
                </main>
            </div>
        </>
    )
}

export default Layout