'use client'

import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import React from 'react'

const TopNav = () => {
  const { theme, setTheme } = useTheme();
  return (<div className={`${
    theme === 'dark'
      ? 'bg-[#644b2e]'
      : 'bg-[#fff9f0]'
  } w-full h-28 align-middle flex items-center`}>
<motion.div
  initial={{ opacity: 0, x: -150 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4 }}
><Link href="/" className="w-28 h-28 relative block">
    <Image
      src='https://res.cloudinary.com/dayvllk5w/image/upload/v1765535934/logo_bw9gem.jpg'
      alt="Logo"
      fill
      className="object-contain"
      priority
    />
  </Link>
</motion.div></div>
  )
}

export default TopNav