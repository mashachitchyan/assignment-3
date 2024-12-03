import React from 'react'

interface BenefitCardProps {
    heading: string;
    number: string;
    description: string;
    variant?: 'default' | 'vertical';
}

const BenefitCard = ({ heading, number, description, variant }: BenefitCardProps) => {

    const baseClasses = 'flex gap-4';
    const verticalClasses = 'flex flex-col gap-1';
    const defaultClasses = 'flex items-center';

    return (
        <div className='bg-off-black rounded-3xl p-4 border-dark-grey border flex flex-col justify-between text-left p-6'>
            <h4 className='text-lg bold-font pb-4'>{heading}</h4>
            <div className={`${baseClasses} ${variant === 'vertical' ? verticalClasses : defaultClasses}`}>
                <p className='text-3xl text-lime bold-font'>{number}</p>
                <p className='text-light-grey bold-font'>{description}</p>
            </div>
        </div>
    )
}

export default BenefitCard