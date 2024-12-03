
import React from 'react'
import Hero from './Hero'
import BenefitCard from './BenefitCard'
import LogoSlider from './LogoSlider'
import ReviewCards from './ReviewCards'
import Dashboard from './Dashboard'
import FinalCTA from './CallToAction'

function HomeMain() {
  return (
    <div>
      <Hero title='Mission' heroText='Turn insights into impact.' paragraph='Leverage real time analytics and detailed reporting to make smarter business decisions.' />
      <div id='benefits' className='flex-col text-center w-screen py-16 px-28'>
        <p className='text-s text-lime uppercase bold-font'>What are the benefits?</p>
        <p className='text-2xl'>All essential tools under one roof</p>
        <div className='grid grid-cols-4 gap-4 h-[30vh] pt-4'>
          <BenefitCard
            heading='Track ongoing orders'
            number='12'
            description='processing' />

          <BenefitCard
            heading='Customer insights'
            number='34'
            description='new buyers' />

          <BenefitCard
            heading='Dynamic profit updates'
            number='$8,524,17'
            description='$1,587.64 more than the month before'
            variant='vertical' />

          <BenefitCard
            heading='Set sales goals'
            number='$2,300'
            description='this is 21% higher than this time last month'
            variant='vertical' />
        </div>

      </div>
      <div className='py-16 text-center w-screen'>
        <p className='text-2xl'>Easy integration with various platforms:</p>
        <LogoSlider />
        <Dashboard />
        <ReviewCards />
        <FinalCTA heroText='Build Stronger Connections, Faster' paragraph='The product will officially launch in March, 2025. Enjoy exclusive early access now!'/>
      </div>
    </div>
  )
}

export default HomeMain;