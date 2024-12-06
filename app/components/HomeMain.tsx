
import React from 'react'
import Hero from './Hero'
import BenefitCard from './BenefitCard'
import LogoSlider from './LogoSlider'
import ReviewCards from './ReviewCards'
import Dashboard from './Dashboard'
import FinalCTA from './CallToAction'

function HomeMain() {
  return (
    <div  className='sm:overflow-hidden'>
      <Hero title='Mission' heroText='Turn insights into impact.' paragraph='Leverage real time analytics and detailed reporting to make smarter business decisions.' />
      <div id='benefits' className='flex-col text-center w-screen py-16 2xl:px-64 xl:px-24 lg:px-16 md:px-12 sm:px-12'>
        <p className='text-s text-lime uppercase bold-font'>What are the benefits?</p>
        <p className='2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl'>All essential tools under one roof</p>
        <div className='grid gap-4 pt-4 2xl:h-[15vh] xl:h-[30vh] lg:h-[fit] md:h-fit sm:h-fit 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
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
        <LogoSlider />
        <Dashboard />
        <ReviewCards />
        <FinalCTA heroText='Build Stronger Connections, Faster' paragraph='The product will officially launch in March, 2025. Enjoy exclusive early access now!' />
      </div>
    </div>
  )
}

export default HomeMain;