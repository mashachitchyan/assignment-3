import React from 'react'
import PrimaryButton from './Buttons/PrimaryButton';

interface CallToAction {
    heroText: string;
    paragraph: string
}

function CallToAction({ heroText, paragraph } : CallToAction) {
    return (
        <div className='flex flex-col items-center justify-center text-center w-screen pt-16 pb-8 px-24 top-0 left-0 right-0'>
            <h2 className='2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl light-font pb-4 pt-2'>{heroText}</h2>
            <p className='2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-base pb-4'>{paragraph}</p>
            <PrimaryButton label='Get early access' />
        </div>
    )
}

export default CallToAction;