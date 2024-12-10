import React from 'react'

function Dashboard() {
    return (
        <div className='flex flex-col items-center justify-center w-screen pt-16 pb-8 px-24 2xl:px-64'>
            <p className='2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl light-font text-center'>User friendly dashboard with adjustable components</p>
            <p className='2xl:text-lg xl:text-lg lg-text-lg md:text-base sm:text-base pb-4 light-font w-3/4 text-center text-light-grey'>Each business is different, so the dashboard is designed with every user in mind. We provide ultimate control and flexibility over the layout and functionality of your dashboard, where all your needs are met. </p>
            <img src="./images/Customization.gif" alt="Dashboard" className='mt-4 rounded-3xl'/>
        </div>
    )
}

export default Dashboard;