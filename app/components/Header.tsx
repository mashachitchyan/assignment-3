"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import SecondaryButton from './Buttons/SecondaryButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white border-dark-grey dark:bg-black">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="./images/Logo.svg"
            alt="logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 right-4 w-auto md:block md:relative md:top-auto md:right-auto`}
          id="navbar"
        >
          <ul className="flex flex-col p-4 bg-off-black border border-dark-grey rounded-3xl md:flex-row md:items-center md:space-x-8 md:mt-0 md:p-0 md:bg-transparent md:border-0">
            <li>
              <SecondaryButton label="Pricing" href="/pricing" />
            </li>
            <li>
              <SecondaryButton label="Support" href="/support" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
