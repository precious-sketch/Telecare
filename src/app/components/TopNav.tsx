'use client'

import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'

const TopNav = () => {
  const { theme, setTheme } = useTheme();
      const [scrollY, setScrollY] = useState(0);
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
  return (<div className={`${
    theme === 'dark'
      ? 'bg-[#644b2e]'
      : 'bg-[#efe1cd]'
  } w-full h-24 align-middle flex items-center`}>
<div className={` w-full h-24 align-middle flex items-center justify-center`}>
       <motion.div
  initial={{ opacity: 0, x: -150 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4 }}
>
  <Link href="/" className="w-24 h-24 relative block">
    <Image
      src='https://res.cloudinary.com/dayvllk5w/image/upload/v1765535934/logo_bw9gem.jpg'
      alt="Logo"
      fill
      className="object-cover"
      priority
    />
  </Link>
</motion.div>
<div className="font-extrabold pl-2 text-2xl">
    TELECARE 
    <br />
    SERVICES
</div>
</div>

</div>
  )
}

export default TopNav