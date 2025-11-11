'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();


  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`${theme==='dark'?'border-white':'border-black'} p-2 rounded-full border  transition`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
}
