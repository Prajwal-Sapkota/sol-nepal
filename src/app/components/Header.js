"use client";
import { useState } from 'react';
import { RiMenu3Fill, RiCloseLine, RiSearchLine, RiUserLine } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md backdrop-blur-lg">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-4">

        {/* 🔹 Small Screen */}
        <div className="flex items-center justify-between w-full sm:hidden ml-6">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark">
            <RiMenu3Fill className="h-5 w-7" />
          </button>

          {/* Mobile Logo */}
          <Link href="/" className="flex items-center gap-2 ml-auto">
            <Image src="/images/logo-1.png" alt="SOL Logo" width={40} height={40} className="rounded-full" priority />
            <span className="text-dark animate-slideRightLeft">SOCIETY OF OTOLARYNGOLOGISTS OF NEPAL</span>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-4 mt-12 w-72 bg-white shadow-lg rounded-md z-10">
            <div className="flex justify-end items-center mb-4 px-4">
              <button onClick={() => setIsMenuOpen(false)} className="text-dark mt-5">
                <RiCloseLine className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 px-4">
              <Link href="/" className="text-lg text-dark hover:text-primary">Home</Link>
              <Link href="/about-us" className="text-lg text-dark hover:text-primary">About Us</Link>
              <Link href="/members" className="text-lg text-dark hover:text-primary">Members</Link>
              <Link href="/events" className="text-lg text-dark hover:text-primary">Events</Link>
              <Link href="/publications" className="text-lg text-dark hover:text-primary">Publications</Link>
              <Link href="/gallery" className="text-lg text-dark hover:text-primary">Gallery</Link>
              <Link href="/contact" className="text-lg text-dark hover:text-primary">Contact</Link>
            </nav>
          </div>
        )}

        <div className="hidden sm:flex sm:flex-col gap-6 ml-5 w-full">

          <Link href="/" className="flex items-center gap-2 justify-center sm:justify-start">
            <Image src="/images/logo-1.png" alt="SOL Logo" width={50} height={50} className="rounded-full" priority />
            <span className="text-xl font-bold text-dark animate-slideRightLeft">SOCIETY OF OTOLARYNGOLOGISTS OF NEPAL</span>
          </Link>

          <nav className="flex gap-6">
            <Link href="/" className="text-md font-large text-dark hover:text-primary">Home</Link>
            <Link href="/about-us" className="text-md font-large text-dark hover:text-primary">About Us</Link>
            <Link href="/members" className="text-md font-large text-dark hover:text-primary">Members</Link>
            <Link href="/events" className="text-md font-large text-dark hover:text-primary">Events</Link>
            <Link href="/publications" className="text-md font-large text-dark hover:text-primary">Publications</Link>
            <Link href="/gallery" className="text-md font-large text-dark hover:text-primary">Gallery</Link>
            <Link href="/contact" className="text-md font-large text-dark hover:text-primary">Contact</Link>
          </nav>
        </div>

        <div className="flex justify-end gap-4 ml-60 mr-4 sm:mt-10 md:ml-16 xl:ml-30">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-dark p-2">
            <RiSearchLine className="h-5 w-5" />
          </button>

          <button className=" sm:inline-flex p-2 bg-primary text-white rounded-md hover:bg-primary-dark">
            <RiUserLine className="h-4 w-4 mr-2" />
            Login
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="border-t bg-white shadow-lg">
          <div className="container py-4">
            <div className="relative">
              <RiSearchLine className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-8 pr-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
