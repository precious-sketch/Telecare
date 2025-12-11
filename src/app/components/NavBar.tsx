'use client';

import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LiquidGlass } from '@liquidglass/react';
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
  const pathname = usePathname();

  const linkClass = (path:string) =>
    `cursor-target transition-colors capitalise font-[600] ${theme==='dark'?'decoration-[#efe1cd]':'decoration-[#50391e]'} ${
      pathname === path ? `underline underline-offset-2 decoration-2 ` : ""
    }`;

if (!mounted) return null;
  return (
    <nav className={`${theme==='dark'?'text-white font-[550]  decoration-[#efe1cd]':'text-[#50391e] decoration-[#50391e]'} font-medium fixed top-0 left-0 w-full z-50 px-6 py-3  text-lg duration-300`}>
      <div className={`max-w-4xl mx-auto flex justify-between items-center  ${(theme==='dark'&&scrollY>100)? 'bg-[#50391e]/50 p-3  backdrop-blur-sm border border-neutral-700/40 shadow-sm':((theme==='light'&&scrollY>100)?'bg-[#efe1cd]/50 p-3 backdrop-blur-sm border border-neutral-700/40 shadow-sm':'bg-none p-0 backdrop-blur-none border-0 shadow-none')}`}>
  <motion.div
  initial={{ opacity: 0, x: -150 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4 }}
>
  <Link href="/" className="w-22 h-22 relative block">
    <Image
      src={
        theme === "dark"
          ? "https://res.cloudinary.com/dayvllk5w/image/upload/v1764707810/logo_light_br_sqdgac.png"
          : "https://res.cloudinary.com/dayvllk5w/image/upload/v1764707809/logo_dark_br_ywdqow.png"
      }
      alt="Logo"
      fill
      className="object-contain"
      priority
    />
  </Link>
</motion.div>

      
       <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="hidden md:flex space-x-6"
    >
      <Link href="/" className={linkClass("/")}>Home</Link>
      <Link href="/about" className={linkClass("/about")}>About</Link>
      <Link href="/services" className={linkClass("/services")}>Services</Link>
      <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
    </motion.div>
        <div className={`flex items-center gap-4 ${theme==='dark'?'text-white':'text-[#50391e]'}`}>
          <ThemeToggle />
          <motion.button
           initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
            className={`cursor-target md:hidden p-0 ${theme==='dark'?'text-white':'text-[#50391e]'}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X  className='w-8 h-8' /> : <Menu className='w-8 h-8' />}
          </motion.button>
        </div>
      </div>

  
      {open && (
        <div className={`${theme==='dark'?'bg-[#50391e]/50 p-3   border border-neutral-700/40 shadow-sm':'bg-[#efe1cd]/50 p-3  border border-neutral-700/40 shadow-sm'} md:hidden mt-3 flex flex-col items-center  backdrop-blur-md  py-4 space-y-3`}>
          <Link href="/"  className={linkClass("/")} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about"  className={linkClass("/about")} onClick={() => setOpen(false)}>About</Link>
          <Link href="/services"  className={linkClass("/services")} onClick={() => setOpen(false)}>Services</Link>
          {/* <Link href="/tools" onClick={() => setOpen(false)}>Tools</Link>
          <Link href="/career" onClick={() => setOpen(false)}>Career</Link> */}
          <Link href="/contact"  className={linkClass("/contact")} onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
