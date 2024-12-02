import React from 'react'

interface PrimaryButtonProps {
    label: string;
  }

const SecondaryButton = ({ label }: PrimaryButtonProps) => {
    return (
        <button className='px-8 py-4 rounded-full font-weight-lighter text-white hover:underline text-base light-font'>{label}</button>
    )
}

export default SecondaryButton