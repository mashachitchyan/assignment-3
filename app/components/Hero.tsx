import React from 'react'
import PrimaryButton from './Buttons/PrimaryButton';

interface HeroProps {
    title: string;
    heroText: string;
    paragraph: string
}

const Hero = ({ title, heroText, paragraph }: HeroProps) => {
  return (
    <div className="flex-col text-center w-screen pt-16 pb-8 2xl:px-64 xl:px-24 lg:px-16 md:px-12 sm:px-12">
        <p className='text-s text-lime uppercase bold-font'>{title}</p>
        <h2 className='text-4xl 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-4xl light-font pb-4 pt-2'>{heroText}</h2>
        <p className='2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-base pb-4'>{paragraph}</p>
        <PrimaryButton label='Get early access' />
    </div>
  )
}

export default Hero;