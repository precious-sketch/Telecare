'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
useEffect(() => {
const timer = setTimeout(() => setMounted(true), 0);
 if(typeof window!= undefined){
 setTheme(localStorage.getItem('theme')||'dark')
  }
return () => clearTimeout(timer);
}, []);
useEffect(()=>{
 
localStorage.setItem('theme',theme||'dark')
},[theme])
if (!mounted) return null;
return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`${
        theme === 'dark' ? 'border-white' : 'border-black'
      } p-1 rounded-full border-2 transition`}
       aria-labelledby="Toggle theme"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-gray-600" />
      )}
    </button>
  );
}
