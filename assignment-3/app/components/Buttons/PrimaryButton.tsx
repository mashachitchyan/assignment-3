import { title } from 'process';
import React from 'react'

interface PrimaryButtonProps {
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label }) => {
  return (
    <button className='px-6 py-4 bg-lime rounded-full font-weight-bolder text-black hover:bg-lime-hover text-base bold-font'>{label}</button>
  )
}

export default PrimaryButton
