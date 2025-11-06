'use client';

import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-3 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-white/20 dark:border-gray-800/30 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
           <Image
                  src={theme==='dark'?"/logo_black.png":'/logo_white.png'}
                  alt="Logo"
                  width={50}
                  height={50}
                  className="rounded-full object-contain"
                />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
    
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col items-center bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg rounded-lg py-4 space-y-3 text-gray-800 dark:text-gray-100 border border-white/20 dark:border-gray-800/30">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/" onClick={() => setOpen(false)}>About</Link>
          <Link href="/" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
