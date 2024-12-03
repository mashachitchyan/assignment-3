import Link from 'next/link';
import React from 'react'

interface SecondaryButtonProps {
    label: string;
    href: string;
  }

const SecondaryButton = ({ label, href }: SecondaryButtonProps) => {
    return (
        <Link href={href} passHref>
        <button className='px-8 py-4 rounded-full font-weight-lighter text-white hover:underline text-base light-font'>{label}</button>
        </Link>
    )
}

export default SecondaryButton