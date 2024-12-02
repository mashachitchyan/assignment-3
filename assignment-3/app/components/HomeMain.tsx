
import React from 'react'
import Hero from './Hero'
import BenefitCard from './BenefitCard'

function HomeMain() {
  return (
    <div>
      <Hero title='Mission' heroText='Turn insights into impact.' paragraph='Leverage real time analytics and detailed reporting to make smarter business decisions.' />
      <div id='benefits' className='flex-col text-center w-screen py-16 px-28'>
      <p className='text-s text-lime uppercase bold-font'>What are the benefits?</p>
      <p className='text-2xl'>All essential tools under one roof</p>
      <div className='grid grid-cols-4 gap-4 h-[24vh] pt-4'>
      <BenefitCard heading='Track ongoing orders' number={12} description='processing' />
      <BenefitCard heading='Track ongoing orders' number={12} description='processing' />
      <BenefitCard heading='Track ongoing orders' number={12} description='processing' />
      <BenefitCard heading='Track ongoing orders' number={12} description='processing' />
      </div>
      </div>
    </div>
  )
}

export default HomeMain