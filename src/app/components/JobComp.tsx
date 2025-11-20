'use client'

import { useTheme } from 'next-themes';
import React from 'react'
import { FaLocationPin } from 'react-icons/fa6';
import { MdAccessTime, MdArrowOutward, MdLocationPin } from 'react-icons/md';
import { TbBriefcase2Filled } from 'react-icons/tb';


const JobComp = () => {
    const { theme, setTheme } = useTheme();
  return (
        <div className="w-full flex flex-col">

    <div className='w-full flex flex-row gap-2 border-t border-b py-3'>
    <div className="w-full flex flex-col flex-1">
        <div className="text-md font-bold md:text-lg mb-1">Caregiver for the Elderly</div>
        <div className="text-sm">We are a looking for a New york based caregiver for the elderly, to assist elders with task such dressing up, and cooking of good food, as well as household chores and errands</div>
          <section className="w-full text-xs flex flex-row gap-0.5 py-3 flex-wrap">

<div className="p-1.5 border flex flex-row item-center text-center gap-0.5"> <MdLocationPin  className='w-4 h-4' /><span>New York</span></div>
<div  className="p-1.5 border flex flex-row item-center text-center gap-0.5"><MdAccessTime className='w-4 h-4' /> Full-time</div>
<div  className="p-1.5 border flex flex-row item-center text-center gap-0.5"><TbBriefcase2Filled   className='w-4 h-4' />Elderly care</div>
  </section>
        </div>
        <div className="w-fit text-md font-bold md:text-lg gap-4">
            <span className='w-fit flex-row flex hover:scale-105' > <span>Apply</span> <MdArrowOutward className='w-7 h-7 ml-1' /></span>
            <span className='w-fit flex-row flex hover:scale-105' > <span>Check</span> <MdArrowOutward className='w-7 h-7 ml-1' /></span>
        </div>
    </div> <div className='w-full flex flex-row gap-2 border-t border-b py-3'>
    <div className="w-full flex flex-col flex-1">
        <div className="text-md font-bold md:text-lg mb-1">Supporting Nurse</div>
        <div className="text-sm">We are seeking highly skilled  paediatric and general nursing practitioners. This is a part time role with flexible scheduling where you will provide specialized medical support to our care clients in maryland.</div>
          <section className="w-full text-xs flex flex-row gap-0.5 py-3 flex-wrap">

<div className="p-1.5 border flex flex-row item-center text-center gap-0.5"> <MdLocationPin  className='w-4 h-4' /><span>Maryland</span></div>
<div  className="p-1.5 border flex flex-row item-center text-center gap-0.5"><MdAccessTime className='w-4 h-4' /> Parttime</div>
<div  className="p-1.5 border flex flex-row item-center text-center gap-0.5"><TbBriefcase2Filled   className='w-4 h-4' />Nursing Support</div>
  </section>
        </div>
        <div className="w-fit text-md font-bold md:text-lg gap-4">
            <span className='w-fit flex-row flex hover:scale-105' > <span>Apply</span> <MdArrowOutward className='w-7 h-7 ml-1' /></span>
            <span className='w-fit flex-row flex hover:scale-105' > <span>Check</span> <MdArrowOutward className='w-7 h-7 ml-1' /></span>
        </div>
    </div>
    </div>
  )
}

export default JobComp