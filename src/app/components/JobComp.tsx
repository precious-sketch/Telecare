'use client'

import { useTheme } from 'next-themes';
import React from 'react'
import { FaLocationPin } from 'react-icons/fa6';
import { MdAccessTime, MdArrowOutward, MdLocationPin } from 'react-icons/md';
import { TbBriefcase2Filled } from 'react-icons/tb';


const JobComp = () => {
    const { theme, setTheme } = useTheme();
  return (
        <div className="w-full flex flex-col text-justify my-5">

 Empty, Check back later
    </div>
  )
}
export default JobComp