import React from 'react'
import MainCards from '../components/dashboard/MainCards'
import ExpenseTable from '../components/dashboard/ExpenseTable'
const Dashboard = () => {
    return (
        <>
            <div className='min-h-screen mt-20'>
                <MainCards />
                <ExpenseTable />
            </div>

        </>
    )
}

export default Dashboard