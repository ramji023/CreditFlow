import React from 'react'
import CalendarWidget from '../components/dashboard/CurrentMonth'
import MainCards from '../components/dashboard/MainCards'
import ExpenseTable from '../components/dashboard/ExpenseTable'
const Dashboard = () => {
    return (
        <>
            <div className='min-h-screen bg-gray-100 '>
                <CalendarWidget />
                <MainCards />
                <ExpenseTable />
            </div>
        </>
    )
}

export default Dashboard