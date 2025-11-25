'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";

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
    <div className={`contact ${
    theme === 'dark'
      ? 'text-zinc-50 bg-zinc-900'
      : 'text-zinc-900 bg-zinc-100'
  } flex items-center justify-center bg-cover bg-fixed w-full  max-md:pt-16 pt-24 pb-12   relative overflow-x-hidden`}>
          
        
         <div className={`w-[94%] max-md:max-w-[500px] md:flex-row  max-md:flex-col shadow-lg my-6  z-10  backdrop-blur-sm flex flex-row flex-wrap ${theme==='dark'?' text-neutral-100 bg-black':' text-neutral-950 bg-white'} `}>
              
              <form className='px-3  w-full flex flex-1 items-center  flex-col min-w-56 py-8' >
      <div className='text-2xl max-md:text-xl align-middle flex items-center   w-fit h-fit bebas tracking-wider leading-snug font-semibold'>Message Us</div>
        <div className='w-full flex flex-row flex-wrap pt-5  gap-1 text-md align-middle items-center  max-md:gap-0'>
          <label className='text-nowrap align-start text-start h-fit max-md:w-full max-md:px-1  w-[200px] font-semibold  mulish'>Your Name  </label>
          <input
            type="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={`w-full min-w-32 outline-0 p-1 px-3 text-white ${theme==='dark'?'bg-black border-white text-white':'bg-white border-black  text-black'} border  focus:border-neutral/60  font-light text-lg`}
          />
        </div>
        <div className='w-full flex flex-row flex-wrap  pt-3 gap-1 text-md align-middle items-center  max-md:gap-0'>
          <label className='text-nowrap align-start text-start h-fit max-md:w-full max-md:px-1 w-[200px] font-semibold  mulish'>Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
              className={`w-full min-w-32 outline-0 p-1 px-3 text-white ${theme==='dark'?'bg-black text-white border-white ':'bg-white border-black text-black'} border border-black/40  focus:border-neutral/60  font-light text-lg`}
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
            className={`w-full min-w-32 outline-0 p-1 px-3 text-white ${theme==='dark'?'bg-black text-white border-white ':'bg-white border-black  text-black'} border border-black/40  focus:border-neutral/60  font-light text-lg`}
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
        <button type="submit" className={`cursor-target w-full p-2 align-middle mt-4 text-2xl ${theme==='dark'?'bg-neutral-100 text-neutral-950':'bg-neutral-950 text-neutral-100'}  font-semibold spacin`}>Send</button>
      </form>
      <div className="w-fit gap-4 md:flex-col flex flex-1 flex-row flex-wrap  p-3 md:py-8 align-start justify-start items-start text-wrap pb-10 border-slate-600/50">
        <div className="w-[34%] md:w-[60%] min-w-32">
<div className="font-bold">Visit us</div>
<span className='text-sm w-full leading-0 tracking-tighter'>165 Log Canoe Circle, Suite G, Stevensville, MD 21666</span>
</div>
        <div className="w-[33%]  md:w-full  min-w-32">
<div className="font-bold">Call us</div>
<div className="flex flex-col text-sm w-full  tracking-tighter">
<Link href="tel:+14432493285" className="">
                   +1 (443) 249-3285
                  </Link>
</div>
</div>
        <div className="w-[33%]  md:w-full  min-w-fit">
<div className="font-bold">Email us</div>
<div className="flex  flex-col text-sm w-full  tracking-tighter">
 <Link href="mailto:info@telecareservices.org" className="">
                    info@telecareservices.org
                  </Link>


</div>
</div>
</div>
<div className=" w-full min-w-56 min-h-[400px] h-full flex-1 flex border-slate-600/50">
    <LoadScript
    googleMapsApiKey="AIzaSyD68SwChTso5faj75Erza_SJbYVO8Cs0M8">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "425px" }}
        center={{ lat: 38.9862, lng: -76.3202 }}
        zoom={12}
      />
    </LoadScript>

          </div>

   </div> 
    </div>
  )
}

export default Page