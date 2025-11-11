'use client'

import { useTheme } from "next-themes";
import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  
  const { theme, setTheme } = useTheme();
  return (
    <div className={`flex flex-col min-h-screen items-center justify-center font-sans  ${theme==='dark'?'bg-black text-white ':'bg-zinc-50 text-zinc-900'}`}>
      <Hero />
      <section className="w-full h-screen bg-neutral-500">
jjjjjjjjjjjjjjjjjjjjjjjjj
      </section>
    </div>
  );
}
