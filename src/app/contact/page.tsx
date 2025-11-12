'use client';


import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

const Page = () => {
      const [form, setForm] = useState({ name: '', email: '', message: '' });

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
 const { theme } = useTheme();
  return (
    <div className={`${theme==='dark'?'bg-black text-white':'bg-white text-black'} flex items-center justify-center bg-cover bg-fixed w-full h-screen  max-md:pt-16 pt-24   relative overflow-x-hidden`}>
          
        
              
              <form className='py-8 w-[93%]  px-5 zinc max-w-[600px] border-2 my-4 border-black/25 bg-white/30 z-10 overflow-y-hidden backdrop-blur-sm rounded-xl' >
      <div className='text-xl max-md:text-md p-2 align-middle flex items-center px-7 m-auto bg-black/25 w-fit rounded-full h-fit bebas tracking-wider leading-snug font-semibold'>Send us a message!</div>
        <div className='w-full flex flex-row pt-8  gap-2 text-xl align-middle items-center max-md:flex-col max-md:gap-0'>
          <label className='text-nowrap align-start text-start h-fit max-md:w-full max-md:px-1  w-[200px] font-semibold  mulish'>Your Name  </label>
          <input
            type="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className='w-full outline-0 border p-1 px-3 text-white bg-black/40 border-black/50 rounded-lg focus:border-white/60  font-light text-lg'
          />
        </div>
        <div className='w-full flex flex-row pt-3 gap-2 text-xl align-middle items-center max-md:flex-col max-md:gap-0'>
          <label className='text-nowrap align-start text-start h-fit max-md:w-full max-md:px-1 w-[200px] font-semibold  mulish'>Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className='w-full outline-0 border p-1 px-3 text-white bg-black/40 active:bg-black/25 focus:border-white/60 border-black/50 rounded-lg font-light text-lg'
          />
        </div>
        <div className='w-full flex flex-row pt-3  gap-2 text-xl align-middle items-center max-md:flex-col max-md:gap-0'>
          <label className='text-nowrap align-start text-start h-fit max-md:w-full active:bg-black/25 max-md:px-1   w-[200px] font-semibold mulish'>Your Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={2}
            className='w-full outline-0 border p-1 px-3 text-white  border-black/50 bg-black/40 focus:border-white/60  active:bg-black/25 rounded-lg font-light text-lg'
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
        <button type="submit" className='w-full p-2 align-middle mt-4 text-2xl bg-black/60  font-semibold rounded-md hover:text-black/65 hover:bg-white/50 mulisg '>Send</button>
      </form>
    </div>
  )
}

export default Page