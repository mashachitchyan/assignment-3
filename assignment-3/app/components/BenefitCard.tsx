import React from 'react'

interface BenefitCardProps {
    heading: string;
    number: number;
    description: string;
}

const BenefitCard = ({ heading, number, description }: BenefitCardProps) => {
    return (
        <div className='bg-off-black rounded-3xl p-4 border-dark-grey border flex flex-col justify-between text-left p-6'>
            <h4 className='text-lg bold-font pb-4'>{heading}</h4>
            <div className='flex gap-4 items-center'>
                <p className='text-3xl text-lime bold-font'>{number}</p>
                <p className='text-light-grey bold-font'>{description}</p>
            </div>
        </div>
    )
}

export default BenefitCard