import React from 'react'
import PrimaryButton from './Buttons/PrimaryButton';

interface CallToAction {
    heroText: string;
    paragraph: string
}

function CallToAction({ heroText, paragraph } : CallToAction) {
    return (
        <div className='flex flex-col items-center justify-center w-screen pt-16 pb-8 px-24 top-0 left-0 right-0'>
            <h2 className='text-5xl light-font pb-4 pt-2'>{heroText}</h2>
            <p className='text-lg pb-4'>{paragraph}</p>
            <PrimaryButton label='Get early access' />
        </div>
    )
}

export default CallToAction;