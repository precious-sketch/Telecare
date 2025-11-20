'use client'

import { useTheme } from "next-themes";
import JobComp from "../components/JobComp";

const Page = () => {

    
    const { theme, setTheme } = useTheme();
  return (
    <div className={`w-full py-32 max-w-6xl px-[3%] space-y-5 ${theme==='dark'?'bg-black text-white border-white':"bg-white text-black border-black"}`}>

<section className="w-full">
        <div className="p-2 text-xs border w-fit">Vacancies/Jobs!</div>
  <div className="max-md:text-xl text-3xl font-bold ">Join Our Mission of Care</div>
  <div className="py-3">Join us in our commitment to care. We are seeking <br />compassionate team members who embody our company values.</div></section>

  <section className="w-full text-xs flex flex-row gap-0.5 py-3 flex-wrap">
<div className={`p-1.5 text-center flex items-center ${theme==='dark'?'bg-white text-black':'bg-black text-white'}  border`}>View all</div>
<div className="p-1.5 border">Maryland</div>
<div className="p-1.5 border">New York</div>
<div className="p-1.5 border">Alaska</div>
<div className="p-1.5 border">Full time</div>
<div className="p-1.5 border">Contract</div>
<div className="p-1.5 border">Remote</div>
<div className="p-1.5 border">Nursing Support</div>
<div className="p-1.5 border">Baby Care</div>
<div className="p-1.5 border">Children Care</div>
<div className="p-1.5 border">Elderly Care</div>
  </section>

  <JobComp />
    </div>
  )
}

export default Page