'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from "framer-motion";
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
    <motion.button
    initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay:0.2 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`cursor-target ${
        theme === 'dark' ? 'bg-[#ffcc98] text-black' : 'bg-[#542b00] text-white'
      } px-1.5 p-1 pr-3 font-semibold transition text-sm`}
       aria-labelledby="Toggle theme"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
       <span className='gap-1.5 flex flex-row items-center align-middle'><Sun className="w-5 h-5 text-blue-400" /> <span>Light</span></span> 
      ) : (
       <span className='gap-1.5 flex flex-row items-center align-middle '> <Moon className="w-5 h-5 text-gray-400" /> <span> Dark</span> </span>
      )}
    </motion.button>
  );
}
