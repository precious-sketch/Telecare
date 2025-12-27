'use client'

import { useTheme } from "next-themes";
import Image from "next/image";
import {motion} from 'framer-motion';
import Hero from "./components/Hero";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  
  const { theme, setTheme } = useTheme();
  
const testimonial = [
  {name:'Solomon Omal.',
    company:"Chubitex Petroleum Products Ltd.,",
    picture:'',
testimony:"Our corporate documents and profile are updated and competitive."

  },
  {name:'Paul M. Geoffrey,',
    company:"Expert Assist Limited.",
    picture:'',
testimony:"Timely services delivered worthy of recommendation to anyone."

  }
];

const locations = [
  {
    title: "Cambridge Home",
    address: [
      "206 S Regulator Dr, Cambridge, MD 21613"
    ],
    phone: "443-972-5909",
    number:'+14439725909'
  },
  {
    title: "Silver Spring Home",
    address: [
      "13220 Schubert Place, Silver Spring, MD 20904"
    ],
    phone: "443-249-3285",
    number:'+14432493285'
  },
  {
    title: "Ridgely Home",
    address: [
      "111 West 1st Street, Ridgely, MD 21660"
    ],
    phone: "410-634-8278",
    number:'+14106348278'
  },
  {
    title: "Centerville Home",
    address: [
      "207 W Water St, Centreville"
    ],
    phone: "443-988-0391",
    number:'+14439880391'
  }
];


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
    title: "Community Development Services", 
     img: "/services_14.jpg", 
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
return (<div className={`flex flex-col min-h-screen items-center justify-center font-sans  ${
    theme === 'dark'
      ? 'bg-[#644b2e]'
      : 'bg-[#efe1cd]'
  } `}>
      <Hero />
      <section className={`${
    theme === 'dark'
      ? 'bg-[#50391e]'
      : 'bg-[#fff9f0]'
  } w-full h-fit py-14 md:py-28 px-[3%]`}>
    <div className="w-full max-w-5xl  flex flex-row-reverse m-auto gap-[3%] align-middle justify-center items-start">
{/* <div className="w-full h-72 relative max-md:hidden">
  <Image className="object-contain" alt="team image" fill src='/happy-business-team.png' />
</div> */}

    <div className="relative aspect-square w-1/2 min-h-80 max-md:hidden">
    
      <Image
       src='/happy-business-team.png'
        alt="Blurred edge image"
        fill
        className="object-cover rounded-xl"
        style={{
          maskImage:
            "radial-gradient(circle, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 30%, transparent 75%)",
        }}
      />
    </div>
<div className="w-full flex flex-col gap-3">
     <span className="text-4xl font-semibold">About us</span>

    <div className="relative aspect-square w-80 h-80 md:hidden">
    
      <Image
       src='/happy-business-team.png'
        alt="Blurred edge image"
        fill
        className="object-cover rounded-xl aspect-square"
        style={{
          maskImage:
            "radial-gradient(circle, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 30%, transparent 75%)",
        }}
      />
    </div>
<span className=" max-sm:text-sm max-w-[1000px] max-lg:text-md max-2xl:text-lg text-xl leading-snug tracking-wide  justify-center text-justify gap-4 flex flex-row  max-md:flex-col-reverse">  <span className="w-full flex items-start text-justify leading-loose">
At Telecare Services, we’re committed to providing compassionate and comprehensive Home-based and Community-Focused Care services for individuals with intellectual and developmental disabilities across Maryland. Our mission is rooted in empowering each participant to live fulfilling, independent lives within their communities. <br /> 
{/* Our team is made up of dedicated professionals who bring not only experience but also empathy, patience, and a deep sense of purpose to their work.  Every member contributes significantly to the participants development, success, and sense of worth.  We strive to create an environment where families feel supported, individuals feel heard, and communities feel enriched by the contributions and unique strengths of those we serve.  This collective passion strengthens our mission every single day. */}
</span>

    {/* At the heart of our services is a strong focus on person-centred care, where every plan is shaped around what matters most to the participant.  Since every persons journey is unique, we customise our support to help them develop self-sufficiency, cultivate deep connections, and participate with confidence in daily activities.  By prioritising choice and autonomy, we encourage participants to take active roles in shaping their lives and exploring opportunities that bring them joy, fulfilment, and a true sense of belonging. */}
   

    {/* Every choice we make and every interaction we have is guided by our mission, vision, and values.  Compassion leads our approach, dignity shapes our respect for each person, inclusivity strengthens our communities, and responsibility drives our commitment to doing what is right.  In addition to providing care, Telecare Services aims to improve lives, boost self-esteem, and pave the way for self-sufficiency and personal development.  Through consistent support and a strong sense of partnership, we empower individuals to live meaningful, rewarding lives within the communities they choose. */}
    
</span>
<Link className={`cursor-target w-fit h-fit p-2 px-3 mt-2 flex items-end font-semibold ${
        theme === 'dark' ? 'bg-[#efe1cd] text-[#50391e]' : 'bg-[#50391e] text-white'
      } `} href='/about'>More about us</Link>
      </div></div>
      </section>
  <section
  className={` ${
    theme === 'dark'
      ? 'bg-[#644b2e]'
      : 'bg-[#efe1cd]'
  } w-full h-fit flex align-middle justify-center flex-col py-16 px-[3%] m-auto`}
>
 <div className="w-full flex flex-row"><h2 className="w-full flex flex-1 m-auto font-bold mb-8 text-4xl text-center">Our Services</h2>
  <Link href='/services' className={`cursor-target w-fit h-fit p-1 px-2 text-sm font-semibold ${
        theme === 'dark' ? 'bg-[#efe1cd] text-[#50391e]' : 'bg-[#50391e] text-white'
      }`}>View all services</Link></div> 

  <div
    className="
      grid 
      gap-10 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4
      justify-items-center-safe
    "
  >
    {services.map((item, i) => (
      <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once:true, amount: 0.2 }}
        key={i}
        className={`${
          theme === 'dark' ? 'bg-[#50391e] text-zinc-50' : 'bg-[#fff9f0] text-[#644b2e]'
        } shadow-lg hover:shadow-2xl hover:scale-105 w-full max-w-[350px] overflow-hidden transition `}
      >
        <Image
          src={item.img}
          alt={item.title}
          width={500}
          height={300}
          className="object-cover w-full h-48"
        />
        <div className="p-4 space-y-1">
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="text-sm opacity-80">{item.desc}</p>
          <Link
            href={'/services/'+i}
            className={`cursor-targe`}
          >
        <div   className={`cursor-target inline-block mt-1 px-3 py-1 font-semibold ${
        theme === 'dark' ? 'bg-[#efe1cd] text-[#50391e]' : 'bg-[#50391e] text-white'
      }`}>Read more</div>    
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
  <div className="">

  </div>
</section>
<section
  className={` ${
    theme === 'dark'
      ? 'bg-[#644b2e]'
      : 'bg-[#efe1cd]'
  } w-full h-fit flex align-middle justify-center flex-col py-16 px-[3%] m-auto`}
>
  <h2 className="text-4xl  font-bold text-start mb-8">
    Our Locations
  </h2>

  <div
    className="
       grid 
      gap-10 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4
      justify-items-center-safe
    "
  >
    {locations.map((location, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className={`${
          theme === 'dark' ? 'bg-[#50391e] text-zinc-50' : 'bg-[#fff9f0] text-[#644b2e]'
        } shadow-lg hover:shadow-2xl hover:scale-105 w-full gap-2 flex flex-col align-start justify-between items-center text-center max-w-[300px] overflow-hidden transition py-8 p-3`}
      >
        <h3 className={`text-2xl font-bold 600 mb-2 ${
          theme === 'dark' ? 'text-[#fff9f0]' : 'text-[#50391e] '
        } `}>
          {location.title}
        </h3>

     

        <div className="space-y-1  text-sm mb-6">
          {location.address.map((line, idx) =>
           
              <p key={idx}>{line}</p>
            
          )}
        </div>

        {location.phone && (
          <p className="text-sm">
            <span className="font-semibold">Phone:</span>{" "}
            {location.phone}
          </p>
        )}

      

        <Link
        href={`tel:${location.number}`}
          className={`cursor-target inline-block mt-3 px-3 py-1 font-semibold ${
        theme === 'dark' ? 'bg-[#efe1cd] text-[#50391e]' : 'bg-[#50391e] text-white'
      }`}
        >
          Call us
        </Link>

        <Link
            href={`/locations#${i}`}
            className={`cursor-targe`}
          >
        <div   className={`cursor-target inline-block mt-1 px-3 py-1 font-semibold ${
        theme === 'dark' ? 'bg-[#efe1cd] text-[#50391e]' : 'bg-[#50391e] text-white'
      }`}>Get Direction</div>    
          </Link>
      </motion.div>
    ))}
  </div>
</section>

{/* 
      <section className={`${
    theme === 'dark'
      ? 'bg-[#644b2e]'
      : 'bg-[#fff9f0]'
  } py-16 px-6 w-full`}>
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10">
          WHAT OUR CLIENTS ARE SAYING
        </h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {testimonial.map((res, i) => (
            <div key={i} className={`${theme==='dark'?'bg-[#50391e]':'bg-[#efe1cd] '} shadow-md p-4`}>
              <p className={`${theme==='dark'?'text-gray-400':'text-gray-700'}  mb-6`}>
                {res.testimony}
              </p>
              <div className="flex items-center gap-2 mb-0">
              {res.picture&&<Image
                  src={res.picture||"/ceo.jfif"}
                  alt="Logo"
                  width={50}
                  height={50}
                  className="rounded-full object-contain bg-neutral-500/10"
                />} 
                <div>
                  <p className="font-bold">{res.name}</p>
                  <p className={`text-sm ${theme==='dark'?'text-gray-300':'text-gray-600'}  mb-6`}>{res.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
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
//     <div className={`${theme==='dark'?'bg-[#50391e] text-white':'bg-[#efe1cd] text-[#50391e]'} flex items-center justify-center bg-cover bg-fixed w-full  max-md:pt-16 pt-24   relative overflow-x-hidden`}>
          
        
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
//             className='w-full outline-0 border p-1 px-3 text-white bg-[#50391e]/40 border-[#50391e]/50  focus:border-white/60  font-light text-lg'
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
//             className='w-full outline-0 border p-1 px-3 text-white bg-[#50391e]/40 active:bg-[#50391e]/25 focus:border-white/60 border-[#50391e]/50  font-light text-lg'
//           />
//         </div>
//         <div className='w-full flex flex-row pt-3  gap-1 text-md align-middle items-center max-md:flex-col max-md:gap-0'>
//           <label className='text-nowrap align-start text-start h-fit max-md:w-full active:bg-[#50391e]/25 max-md:px-1   w-[200px] font-semibold mulish'>Your Message</label>
//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             required
//             rows={2}
//             className='w-full outline-0 border p-1 px-3 text-white  border-[#50391e]/50 bg-[#50391e]/40 focus:border-white/60  active:bg-[#50391e]/25  font-light text-lg'
//           />
//         </div>
//         <button type="submit" className={`w-full p-2 align-middle mt-4 text-2xl ${theme==='dark'?'bg-slate-200 text-slate-900':'bg-slate-900 text-slate-200'}  font-semibold spacin`}>Send</button>
//       </form>
//       <div className="w-full flex flex-row flex-wrap space-y-2 p-5 space-x-2 align-start justify-start items-start text-wrap border-t-2 border-[#50391e]/25">
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