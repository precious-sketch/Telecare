'use client'

import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  
  const { theme, setTheme } = useTheme();
  return (
    <div className={`flex min-h-screen items-center justify-center font-sans  ${theme==='dark'?'bg-black':'bg-zinc-50'}`}>
      TELECARESERVICES
    </div>
  );
}
