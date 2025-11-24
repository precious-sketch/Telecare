'use client';

import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion } from "framer-motion";
export default function Navbar() {
 const [open, setOpen] = useState(false);

  const { theme, setTheme } = useTheme();
    const [scrollY, setScrollY] = useState(0);

useEffect(() => {
requestAnimationFrame(() => {
setScrollY(window.scrollY);
});
const handleScroll = () => {
setScrollY(window.scrollY);
};
window.addEventListener("scroll", handleScroll, { passive: true });
return () => {
window.removeEventListener("scroll", handleScroll);
};
}, []);
  useEffect(()=>{
   console.log('object', theme, scrollY)
  },[theme, scrollY])
const [mounted, setMounted] = useState(false);
useEffect(() => {
const timer = setTimeout(() => setMounted(true), 0);
 if(typeof window!= undefined){
 setTheme(localStorage.getItem('theme')||'dark')
  }
return () => clearTimeout(timer);
}, []);


if (!mounted) return null;
  return (
    <nav className={`${theme==='dark'?'text-white':'text-black'}  fixed top-0 left-0 w-full z-50 px-6 py-3  text-lg -colors duration-300`}>
      <div className={`max-w-3xl mx-auto flex justify-between items-center  ${(theme==='dark'&&scrollY>100)? 'bg-black/50 p-3  backdrop-blur-sm border border-neutral-700/40 shadow-sm':((theme==='light'&&scrollY>100)?'bg-white/50 p-3 backdrop-blur-sm border border-neutral-700/40 shadow-sm':'bg-none p-0 backdrop-blur-none border-0 shadow-none')}`}>
        <motion.div
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
        className="">
            <Link href='/'><Image
                  src={theme==='dark'?"/logo_white.png":'/logo_black.png'}
                  alt="Logo"
                  width={50}
                  height={50}
                  className="rounded-full object-contain"
                /></Link> 
        </motion.div>
      
        <motion.div 
         initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay:0.3 }}
        className="hidden md:flex space-x-6">
          <Link href="/" className="cursor-target hover:text-blue-700 transition-colors">Home</Link>
          <Link href="/about" className="cursor-target hover:text-blue-700 transition-colors">About</Link>
          <Link href="/services" className="cursor-target hover:text-blue-700 transition-colors">Services</Link>
         <Link href="/contact" className="cursor-target hover:text-blue-700 transition-colors">Contact</Link>
        </motion.div>

        {/* Right section */}
        <div className={`flex items-center gap-2 ${theme==='dark'?'text-white':'text-black'}`}>
          <ThemeToggle />
          <motion.button
           initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
            className={`cursor-target md:hidden p-2 ${theme==='dark'?'text-white':'text-black'}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

  
      {open && (
        <div className={`${theme==='dark'?'bg-black/50 p-3   border border-neutral-700/40 shadow-sm':'bg-white/50 p-3  border border-neutral-700/40 shadow-sm'} md:hidden mt-3 flex flex-col items-center  backdrop-blur-md  py-4 space-y-3`}>
          <Link href="/" className='cursor-target hover:text-blue-700 transition-colors' onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className='cursor-target hover:text-blue-700 transition-colors' onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" className='cursor-target hover:text-blue-700 transition-colors' onClick={() => setOpen(false)}>Services</Link>
          {/* <Link href="/tools" onClick={() => setOpen(false)}>Tools</Link>
          <Link href="/career" onClick={() => setOpen(false)}>Career</Link> */}
          <Link href="/contact" className='cursor-target hover:text-blue-700 transition-colors' onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
