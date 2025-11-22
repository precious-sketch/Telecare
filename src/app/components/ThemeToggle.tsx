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
        theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
      } px-1 p-1 pr-2 rounded-full font-bold transition text-sm`}
       aria-labelledby="Toggle theme"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
       <span className='gap-1 flex flex-row items-center align-middle'><Sun className="w-5 h-5 text-blue-400" /> <span>Light</span></span> 
      ) : (
       <span className='gap-1 flex flex-row items-center align-middle'> <Moon className="w-5 h-5 text-gray-400" /> <span> Dark</span> </span>
      )}
    </button>
  );
}
