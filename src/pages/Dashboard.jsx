import React from 'react'
import StateCards from '../components/dashboard/StateCards'
import Activities from '../components/dashboard/Activities'
const Dashboard = () => {
    return (
        <>
            <div className='p-4'>
                <StateCards />
                <Activities/>
            </div>
        </>
    )
}

export default Dashboard