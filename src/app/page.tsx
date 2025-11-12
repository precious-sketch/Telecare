'use client'

import { useTheme } from "next-themes";
import Image from "next/image";
import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  
  const { theme, setTheme } = useTheme();
  return (
    <div className={`flex flex-col min-h-screen items-center justify-center font-sans  ${theme==='dark'?'bg-black text-white ':'bg-zinc-50 text-zinc-900'}`}>
      <Hero />
      <section className={`${theme==='dark'?'text-white bg-black':'text-black bg-white'} w-full h-screen flex flex-col align-middle justify-center items-start px-[5%] space-y-4`}>
<span className="font-extrabold max-sm:text-xl max-md:text-2xl max-2xl:text-3xl text-5xl justify-center text-justify max-w-[600px]">Our team comprises passionate and experienced professionals dedicated to providing exceptional care and support. Meet the individuals behind our mission, each committed to delivering person-centered care and advocacy.</span>
<Link className={`w-fit p-2 px-3 font-semibold ${theme==='dark'?'bg-white text-black':'bg-black text-white'}`} href='/about'>More about us</Link>
      </section>
    </div>
  );
}
