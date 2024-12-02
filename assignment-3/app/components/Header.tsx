import Link from 'next/link';
import Image from 'next/image';
import PrimaryButton from './Buttons/PrimaryButton';
import SecondaryButton from './Buttons/SecondaryButton';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-24 w-screen">
      <Link href="/"><Image src="/images/Logo.svg" alt='logo' width={150} height={50} />
      </Link>
      <nav>
        <div className='flex justify-around'>
          <SecondaryButton label='Features' />
          <SecondaryButton label='Pricing' />
          <SecondaryButton label='Support' />
          <PrimaryButton label='Request access' />
        </div>
      </nav>
    </header>
  );
}
