import Link from 'next/link';
import Image from 'next/image';
import PrimaryButton from './Buttons/PrimaryButton';
import SecondaryButton from './Buttons/SecondaryButton';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 w-screen 2xl:px-64 xl:px-24 lg:px-16 md:px-12 sm:px-12">
      <Link href="/"><Image src="./images/Logo.svg" alt='logo' width={150} height={50} />
      </Link>
      <nav>
        <div className='flex justify-around'>
          <SecondaryButton label='Pricing' href='/pricing'/>
          <SecondaryButton label='Support' href='/support'/>
          <PrimaryButton label='Request access' />
        </div>
      </nav>
    </header>
  );
}
