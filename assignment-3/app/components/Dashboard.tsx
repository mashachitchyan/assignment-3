import React from 'react'

function Dashboard() {
    return (
        <div className='flex flex-col items-center justify-center w-screen pt-16 pb-8 px-24'>
            <p className='text-2xl light-font text-center'>User friendly dashboard with adjustable components</p>
            <p className='text-lg pb-4 light-font w-3/4 text-center text-light-grey'>Each business is different, so the dashboard is designed with every user in mind. We provide ultimate control and flexibility over the layout and functionality of your dashboard, where all your needs are met. </p>
            <img src="/images/Dashboard.svg" alt="Dashboard" className='mt-4'/>
        </div>
    )
}

export default Dashboard;