'use client'

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';

const Services = () => {

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
    title: "Community Development Services", 
     img: "/service_4.jpg", 
    desc: "CDS focuses on fostering community engagement, encouraging social inclusion, and promoting active participation within diverse community settings.", 
  }, 
  { 
    title: "Respite Care", 
      img: "/service_5.jpg", 
    desc: "We provide temporary relief for caregivers through respite care services. These services offer short-term breaks, allowing caregivers to recharge while ensuring continuous care for participants.", 
  }, 
  { 
    title: "Employment Services", 
   img: "/service_6.jpg", 
    desc: "At Telecare Services, we are committed to empowering individuals with disabilities by providing comprehensive employment services. Our goal is to ensure that each individual finds meaningful, long-term employment that aligns with their skills and aspirations.", 
  }, 
  { 
    title: "Adult Residential Services", 
   img: "/service_7.jpg",  
    desc: "At Telecare Services, we understand the importance of providing a supportive and nurturing environment for adults with special needs. Our Adult Residential Services offer a comforting and inclusive home setting where individuals can thrive.", 
  }, 
  { 
    title: "Remote Support Services", 
     img: "/service_8.jpg",  
    desc: "Our Remote Support Services enable individuals to maintain independence while receiving real-time assistance when needed. Through the use of advanced technology and professional support, we provide:", 
  }, 
  { 
    title: "Day Habilitation Services", 
     img: "/service_9.jpg", 
    desc: "We offer structured, enriching day habilitation programs designed to support individuals in achieving greater independence and personal growth. Our services include both CSR Compliant and Non-CSR Compliant options to meet diverse needs.", 
  }
];
const [mounted, setMounted] = useState(false);
useEffect(() => {
const timer = setTimeout(() => setMounted(true), 0);
 if(typeof window!= undefined){
 setTheme(localStorage.getItem('theme')||'dark')
  }
return () => clearTimeout(timer);
}, []);

useEffect(() => {
  window.history.scrollRestoration = "manual";
}, []);
if (!mounted) return null;

  return (
    <div
  className={` ${
    theme === 'dark'
      ? 'text-zinc-50 bg-zinc-900'
      : 'text-zinc-900 bg-zinc-100'
  } w-full min-h-screen   mx-auto max-w-7xl`}>
  
  <section className="w-full relative min-h-[250px] h-[40vh] max-h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `url(/service_10.jpg)`,
                filter: theme === 'dark' ? 'brightness(0.6)' : 'brightness(1)',
              }}>
     
              <div className={`z-10 absolute top-0 right-0 left-0 bottom-0 w-full  h-full ${theme==='dark'?'bg-[radial-gradient(circle_at_center,#00000035,black)]':'bg-[radial-gradient(circle_at_center,#ffffff35,white)]'}`}></div>
              <div className="absolute max-w-[500px]  flex flex-col bottom-0 left-0 w-full p-3 py-2 z-10 font-extrabold text-6xl max-xl:text-4xl max-md:text-3xl">OUR SERVICES</div>
</section>
   <div
    className="
     py-24
      grid 
      gap-6 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4
      justify-items-center
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
            href={"/services/"+i}
            className={`inline-block mt-1 px-3 cursor-target py-1 font-semibold ${
              theme === 'dark'
                ? 'bg-zinc-100 text-zinc-900'
                : 'bg-zinc-900 text-zinc-100'
            }`}
          >
            Read more
          </Link>
        </div>
      </motion.div>
    ))}
  </div>

    </div>
  )
}

export default Services