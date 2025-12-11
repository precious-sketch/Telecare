'use client'

import { useTheme } from "next-themes";
import Image from "next/image"
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import AboutQuote from "../components/AboutQuote";
const Page = () => {
  const { theme, setTheme } = useTheme();
  const text = '  “Telecare Services was founded with a vision to redefine Home-based and Community-Focused Care for individuals with intellectual and developmental disabilities.”'

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
    <div className={`w-full min-h-screen ${
        theme === 'dark' ? 'bg-[#71583c] text-white' : 'bg-[#efe1cd] text-[#71583c]'
      }`}>
<section className="w-full relative min-h-[250px] h-[40vh] max-h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `url(/services_11.jpg)`,
                filter: theme === 'dark' ? 'brightness(0.6)' : 'brightness(1)',
              }}>
     
              <div className={`z-10 absolute top-0 right-0 left-0 bottom-0 w-full  h-full ${theme==='dark'?'bg-[radial-gradient(circle_at_center,#00000035,black)]':'bg-[radial-gradient(circle_at_center,#ffffff35,white)]'}`}></div>
               <div className="absolute max-w-[500px]   bottom-0 left-0 w-full p-3 py-2 z-10 font-extrabold text-6xl max-xl:text-4xl max-md:text-3xl flex flex-row gap-2"> <span className={` ${
        theme === 'dark' ? 'text-white' : 'text-black'
      } `} >ABOUT</span><span  className={` ${
        theme === 'dark' ? 'text-white' : 'text-black'
      } `} >US </span>  </div>
</section>
<AboutQuote />
<section className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pb-24 p-[3%] gap-5 mx-auto align-middle justify-center items-center 
      justify-items-center">

  <div className={`${theme==='dark'?'bg-[#644b2e] text-slate-100':'bg-[#efe1cd] text-slate-900'} w-full text-center flex p-4 flex-col align-middle justify-center items-center max-w-[400px] flex-1  shadow-lg`}>
<div className="w-16 h-16 relative"><Image src='/star.png' alt="star" fill  className="" /></div>
<div className="font-bold text-md md:text-lg 2xl:text-xl">Our Mission</div>
<div className="text-sm 2xl:text-md">To provide services that are tailored to the participants preferences to enable them to have a full life in the community.</div>
  </div><div className={`${theme==='dark'?'bg-[#644b2e] text-slate-100':'bg-[#efe1cd] text-slate-900'} w-full text-center flex p-4 flex-col align-middle justify-center items-center max-w-[400px] flex-1  shadow-lg`}>
<div className="w-16 h-16 relative"><Image src='/star.png' alt="star" fill  className="" /></div>
<div className="font-bold text-md md:text-lg 2xl:text-xl">Our Vision</div>
<div className="text-sm 2xl:text-md">To become one of the preferred healthcare providers in Maryland by caring for and supporting participants with intellectual and/or developmental disabilities to have a meaningful life in their chosen community.</div>
  </div><div className={`${theme==='dark'?'bg-[#644b2e] text-slate-100':'bg-[#efe1cd] text-slate-900'} w-full text-center flex p-4 flex-col align-middle justify-center items-center max-w-[400px] flex-1  shadow-lg`}>
<div className="w-16 h-16 relative"><Image src='/star.png' alt="star" fill  className="" /></div>
<div className="font-bold text-md md:text-lg 2xl:text-xl">Our Values</div>
<div className="text-sm 2xl:text-md">At Telecare Services, our values form the cornerstone of everything we do. Compassion, dignity, inclusivity, and respect guide our approach in empowering individuals to lead fulfilling lives with dignity and autonomy.</div>
  </div><div className={`${theme==='dark'?'bg-[#644b2e] text-slate-100':'bg-[#efe1cd] text-slate-900'} w-full text-center flex p-4 flex-col align-middle justify-center items-center max-w-[400px] flex-1  shadow-lg`}>
<div className="w-16 h-16 relative"><Image src='/star.png' alt="star" fill  className="" /></div>
<div className="font-bold text-md md:text-lg 2xl:text-xl">Our Motto
</div>
<div className="text-sm 2xl:text-md"> Our motto is “We Care”. At Telecare Services, we care deeply about our individuals, letting them direct us and determine the level of care. This is reflected in the services we offer
</div>
  </div>


</section>
    </div>
  )
}

export default Page