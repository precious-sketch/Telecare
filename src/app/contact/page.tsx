'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const Page = () => {
      const [form, setForm] = useState({ name: '', email: '', message: '' });
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};


  const { theme, setTheme } = useTheme();
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
    <div className={`${theme==='dark'?'bg-black text-white':'bg-white text-black'} flex items-center justify-center bg-cover bg-fixed w-full  max-md:pt-16 pt-24   relative overflow-x-hidden`}>
          
        
         <div className={`w-[94%] max-md:max-w-[500px] md:flex-row  max-md:flex-col  zinc  my-6  z-10  backdrop-blur-sm flex flex-row flex-wrap ${theme==='dark'?'bg-slate-950 text-slate-00':'bg-slate-200 text-slate-900'} `}>
              
              <form className='px-3 w-full flex flex-1 items-center border-2 border-slate-600/50 flex-col min-w-56 pb-3' >
      <div className='text-md max-md:text-md p-3 align-middle flex items-center   w-fit h-fit bebas tracking-wider leading-snug font-semibold'>Send us a message!</div>
        <div className='w-full flex flex-row flex-wrap pt-8  gap-1 text-md align-middle items-center  max-md:gap-0'>
          <label className='text-nowrap align-start text-start h-fit max-md:w-full max-md:px-1  w-[200px] font-semibold  mulish'>Your Name  </label>
          <input
            type="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className='w-full min-w-32 outline-0 border p-1 px-3 text-white bg-black/40 border-black/50  focus:border-white/60  font-light text-lg'
          />
        </div>
        <div className='w-full flex flex-row flex-wrap pt-3 gap-1 text-md align-middle items-center  max-md:gap-0'>
          <label className='text-nowrap align-start text-start h-fit max-md:w-full max-md:px-1 w-[200px] font-semibold  mulish'>Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className='w-full  min-w-32 outline-0 border p-1 px-3 text-white bg-black/40 active:bg-black/25 focus:border-white/60 border-black/50  font-light text-lg'
          />
        </div>
        <div className='w-full flex flex-row flex-wrap pt-3  gap-1 text-md align-middle items-center  max-md:gap-0'>
          <label className='text-nowrap align-start text-start h-fit max-md:w-full active:bg-black/25 max-md:px-1   w-[200px] font-semibold mulish'>Your Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={2}
            className='w-full outline-0 border  min-w-32 p-1 px-3 text-white  border-black/50 bg-black/40 focus:border-white/60  active:bg-black/25  font-light text-lg'
          />
        </div>
        {/* <div>
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Your Message</label>
         <textarea 
          value={form.message}
            onChange={handleChange}
            required
         name="message" id="">

         </textarea>
        </div> */}
        <button type="submit" className={`w-full p-2 align-middle mt-4 text-2xl ${theme==='dark'?'bg-slate-200 text-slate-900':'bg-slate-900 text-slate-200'}  font-semibold spacin`}>Send</button>
      </form>
      <div className="w-fit min-w-36 flex flex-1 flex-row flex-wrap gap-2 p-3 align-start justify-start items-start text-wrap border-2 border-slate-600/50">
        <div className="w-[34%] flex-1 min-w-24">
<div className="font-bold">Visit us</div>
<span>165 Log Canoe Circle, Suite G, Stevensville, MD 21666</span>
</div>
        <div className="w-[33%] min-w-32">
<div className="font-bold">Call us</div>
<span>(443) 249-3285</span>
</div>
        <div className="w-[33%] min-w-fit">
<div className="font-bold">Email us</div>
<span>Info@telecareservices.org</span>
</div>
</div>
<div className=" w-full min-w-56 h-full flex-1 flex border-2 border-slate-600/50">
<Map
mapboxAccessToken="pk.eyJ1Ijoic25vdGF0IiwiYSI6ImNseW5vdnN5cjA3ZHEycnM0eTlyMzhrYnUifQ.tsLlCTVcEm1YAlkjCu3AiQ"
initialViewState={{
        longitude: -38.9,
        latitude: -76.3,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
          </div>

   </div> 
    </div>
  )
}

export default Page