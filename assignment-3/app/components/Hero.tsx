import React from 'react'
import PrimaryButton from './Buttons/PrimaryButton';

interface HeroProps {
    title: string;
    heroText: string;
    paragraph: string
}


const Hero = ({ title, heroText, paragraph }: HeroProps) => {
  return (
    <div className='flex-col text-center w-screen pt-16 pb-8 px-24'>
        <p className='text-s text-lime uppercase bold-font'>{title}</p>
        <h2 className='text-5xl light-font pb-4 pt-2'>{heroText}</h2>
        <p className='text-lg pb-4'>{paragraph}</p>
        <PrimaryButton label='Request early access' />
    </div>
  )
}

export default Hero