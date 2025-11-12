'use client'

import { useTheme } from "next-themes";
import Image from "next/image";
import Hero from "./components/Hero";
import Link from "next/link";

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

  return (
    <div className={`flex flex-col min-h-screen items-center justify-center font-sans  ${theme==='dark'?'bg-black text-white ':'bg-zinc-50 text-zinc-900'}`}>
      <Hero />
      <section className={`${theme==='dark'?'text-white bg-black':'text-black bg-white'} w-full h-screen flex flex-col align-middle justify-center items-start px-[5%] space-y-4`}>
<span className="font-extrabold max-sm:text-xl max-md:text-2xl max-2xl:text-3xl text-5xl justify-center text-justify max-w-[600px]">Our team comprises passionate and experienced professionals dedicated to providing exceptional care and support. Meet the individuals behind our mission, each committed to delivering person-centered care and advocacy.</span>
<Link className={`w-fit p-2 px-3 font-semibold ${theme==='dark'?'bg-white text-black':'bg-black text-white'}`} href='/about'>Meet the team</Link>
      </section>
      <section className={`${theme==='dark'?'text-zinc-50 bg-zinc-950':'text-zinc-950 bg-zinc-50'} w-full h-screen flex flex-row align-middle justify-center items-start   max-w-7xl space-x-3 space-y-3 mx-auto px-4 py-10  item-center flex-wrap`}>
        .
     {services.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md hover:shadow-lg w-full flex flex-1 flex-col  min-w-60 max-w-80  rounded-md overflow-hidden transition"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-3">
              <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
              <p className="text-gray-600 text-xs mb-1">{item.desc}</p>
              <Link className={`w-fit p-2 px-2 font-semibold ${theme==='dark'?'bg-zinc-100 text-zinc-900':'bg-zinc-900 text-zinc-100'}`} href='/about'>Read more</Link>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}
