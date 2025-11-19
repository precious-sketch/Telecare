'use client'

import { useTheme } from "next-themes";
import Image from "next/image";
import Hero from "./components/Hero";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  
  const { theme, setTheme } = useTheme();
const services = [
  { 
    title: "Personal Support", 
    img: "/service_1.jpg", 
    desc: "Our personal support services are tailored to meet the individual needs of each participant. We offer comprehensive assistance to foster independence and improve daily living skills.", 
  }, 
  { 
    title: "Supported Living", 
   img: "/service_2.jpg",  
    desc: "Our supported living services aim to create a home environment where individuals can thrive while receiving the necessary support to lead fulfilling lives within their communities.", 
  }, 
  { 
    title: "Nursing Support", 
     img: "/service_3.jpg",  
    desc: "Our nursing support services ensure that participants receive specialized care and medical attention as needed, delivered by qualified healthcare professionals.", 
  }, 
  { 
    title: "Community Development (CDS)", 
     img: "/service_4.jpg", 
    desc: "CDS focuses on fostering community engagement, encouraging social inclusion, and promoting active participation within diverse community settings.", 
  }
];
const [mounted, setMounted] = useState(false);
useEffect(() => {
const timer = setTimeout(() => setMounted(true), 0);
if(typeof window!= undefined){
setTheme(localStorage.getItem('theme')||'dark')}
return () => clearTimeout(timer);
}, []);

useEffect(() => {
window.history.scrollRestoration = "manual";
}, []);

if (!mounted) return null;
return (<div className={`flex flex-col min-h-screen items-center justify-center font-sans  ${theme==='dark'?'bg-black text-white ':'bg-zinc-50 text-zinc-900'}`}>
      <Hero />
      <section className={`${theme==='dark'?'text-white bg-black':'text-black bg-white'} w-full h-screen flex flex-col align-middle justify-center items-start px-[5%] space-y-4`}>
<span className="font-extrabold max-sm:text-xl max-md:text-2xl max-2xl:text-3xl text-5xl justify-center text-justify max-w-[600px]">Our team comprises passionate and experienced professionals dedicated to providing exceptional care and support. Meet the individuals behind our mission, each committed to delivering person-centered care and advocacy.</span>
<Link className={`w-fit h-fit p-2 px-3 font-semibold ${theme==='dark'?'bg-white text-black':'bg-black text-white'}`} href='/about'>Meet the team</Link>
      </section>
  <section
  className={` ${
    theme === 'dark'
      ? 'text-zinc-50 bg-zinc-900'
      : 'text-zinc-900 bg-zinc-100'
  } w-full min-h-screen py-10 px-4 mx-auto max-w-7xl`}
>
 <div className="w-full flex flex-row"><h2 className="w-full text-2xl flex flex-1 m-auto font-bold mb-8 text-center">Services</h2> <Link href='/services' className={`w-fit h-fit p-1 px-2 text-sm font-semibold ${theme==='dark'?'bg-white text-black':'bg-black text-white'}`}>View all services</Link></div> 

  <div
    className="
      grid 
      gap-6 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4
      justify-items-center
    "
  >
    {services.map((item, i) => (
      <div
        key={i}
        className={`${
          theme === 'dark' ? 'bg-black text-zinc-50' : 'bg-white text-zinc-900'
        } shadow-md hover:shadow-lg w-full max-w-[300px] overflow-hidden transition `}
      >
        <Image
          src={item.img}
          alt={item.title}
          width={500}
          height={300}
          className="object-cover w-full h-48"
        />
        <div className="p-4 space-y-1">
          <h3 className="font-bold text-base">{item.title}</h3>
          <p className="text-sm opacity-80">{item.desc}</p>
          <Link
            href={'/services/'+i}
            className={`inline-block mt-1 px-3 py-1 font-semibold ${
              theme === 'dark'
                ? 'bg-zinc-100 text-zinc-900'
                : 'bg-zinc-900 text-zinc-100'
            }`}
          >
            Read more
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
}

// 'use client';
// import { useTheme } from 'next-themes';
// import Image from 'next/image'
// import Link from 'next/link'
// import { useEffect, useRef, useState } from 'react';
// import Map from 'react-map-gl/mapbox';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const Page = () => {
//       const [form, setForm] = useState({ name: '', email: '', message: '' });
// const handleChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// ) => {
//   setForm({ ...form, [e.target.name]: e.target.value });
// };


//   const { theme, setTheme } = useTheme();
// const [mounted, setMounted] = useState(false);
// useEffect(() => {
// const timer = setTimeout(() => setMounted(true), 0);
//  if(typeof window!= undefined){
//  setTheme(localStorage.getItem('theme')||'dark')
//   }
// return () => clearTimeout(timer);
// }, []);

// if (!mounted) return null;
//   return (
//     <div className={`${theme==='dark'?'bg-black text-white':'bg-white text-black'} flex items-center justify-center bg-cover bg-fixed w-full  max-md:pt-16 pt-24   relative overflow-x-hidden`}>
          
        
//          <div className={`py-4 w-[93%]   zinc max-w-[600px] border-2 my-4 border-slate-600/50  z-10  backdrop-blur-sm space-x-3 flex flex-row flex-wrap space-y-6 ${theme==='dark'?'bg-slate-950 text-slate-200':'bg-slate-200 text-slate-900'} `}>
              
//               <form className='px-5 w-full' >
//       <div className='text-md max-md:text-md p-2 align-middle flex items-center px-7 m-auto  w-fit h-fit bebas tracking-wider leading-snug font-semibold'>Send us a message!</div>
//         <div className='w-full flex flex-row pt-8  gap-1 text-md align-middle items-center max-md:flex-col max-md:gap-0'>
//           <label className='text-nowrap align-start text-start h-fit max-md:w-full max-md:px-1  w-[200px] font-semibold  mulish'>Your Name  </label>
//           <input
//             type="name"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             className='w-full outline-0 border p-1 px-3 text-white bg-black/40 border-black/50  focus:border-white/60  font-light text-lg'
//           />
//         </div>
//         <div className='w-full flex flex-row pt-3 gap-1 text-md align-middle items-center max-md:flex-col max-md:gap-0'>
//           <label className='text-nowrap align-start text-start h-fit max-md:w-full max-md:px-1 w-[200px] font-semibold  mulish'>Your Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className='w-full outline-0 border p-1 px-3 text-white bg-black/40 active:bg-black/25 focus:border-white/60 border-black/50  font-light text-lg'
//           />
//         </div>
//         <div className='w-full flex flex-row pt-3  gap-1 text-md align-middle items-center max-md:flex-col max-md:gap-0'>
//           <label className='text-nowrap align-start text-start h-fit max-md:w-full active:bg-black/25 max-md:px-1   w-[200px] font-semibold mulish'>Your Message</label>
//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             required
//             rows={2}
//             className='w-full outline-0 border p-1 px-3 text-white  border-black/50 bg-black/40 focus:border-white/60  active:bg-black/25  font-light text-lg'
//           />
//         </div>
//         <button type="submit" className={`w-full p-2 align-middle mt-4 text-2xl ${theme==='dark'?'bg-slate-200 text-slate-900':'bg-slate-900 text-slate-200'}  font-semibold spacin`}>Send</button>
//       </form>
//       <div className="w-full flex flex-row flex-wrap space-y-2 p-5 space-x-2 align-start justify-start items-start text-wrap border-t-2 border-black/25">
//         <div className="w-[33%] flex-1 min-w-24">
// <div className="font-bold">Visit us</div>
// <span>165 Log Canoe Circle, Suite G, Stevensville, MD 21666</span>
// </div>
//         <div className="w-[33%] min-w-32">
// <div className="font-bold">Call us</div>
// <span>(443) 249-3285</span>
// </div>
//         <div className="w-[33%] min-w-fit">
// <div className="font-bold">Email us</div>
// <span>Info@telecareservices.org</span>
// </div>
// </div>
// <div className="w-full h-full flex-1 flex">
// <Map
// mapboxAccessToken="pk.eyJ1Ijoic25vdGF0IiwiYSI6ImNseW5vdnN5cjA3ZHEycnM0eTlyMzhrYnUifQ.tsLlCTVcEm1YAlkjCu3AiQ"
// initialViewState={{
//         longitude: -38.9,
//         latitude: -76.3,
//         zoom: 14
//       }}
//       style={{width: 600, height: 400}}
      
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//     />
//           </div>

//    </div> 
//     </div>
//   )
// }

// export default Page