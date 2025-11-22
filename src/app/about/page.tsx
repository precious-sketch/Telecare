'use client'

import { useTheme } from "next-themes";
import Image from "next/image"

const Page = () => {
  
  const { theme } = useTheme();
  return (
    <div className={`w-full min-h-screen ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
<section className="w-full relative min-h-[250px] h-[40vh] max-h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `url(/about.jpg)`,
                filter: theme === 'dark' ? 'brightness(0.6)' : 'brightness(1)',
              }}>
     
              <div className={`z-10 absolute top-0 right-0 left-0 bottom-0 w-full  h-full ${theme==='dark'?'bg-[radial-gradient(circle_at_center,#00000020,black)]':'bg-[radial-gradient(circle_at_center,#ffffff20,white)]'}`}></div>
              <div className="absolute max-w-[500px] opacity-85 flex flex-col bottom-0 left-0 w-full p-3 py-2 z-10 font-extrabold  text-5xl max-md:text-4xl">ABOUT US</div>
</section>
<section className="text-center max-w-2xl max-sm:text-base text-xl lg:text-2xl  w-full p-[3%] py-16 mx-auto leading-relaxed tracking-wide georgia">
  “Telecare Services was founded with a vision to redefine Home-based and Community-Focused Care for individuals with intellectual and developmental disabilities.”
</section>

<section className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pb-24 p-[3%] gap-5 mx-auto align-middle justify-center items-center 
      justify-items-center">

  <div className={`${theme==='dark'?'bg-zinc-900 text-slate-100':'bg-slate-100 text-slate-900'} w-full text-center flex p-4 flex-col align-middle justify-center items-center max-w-[400px] flex-1  shadow-lg`}>
<div className="w-16 h-16 relative"><Image src='/star.png' alt="star" fill  className="" /></div>
<div className="font-bold text-md md:text-lg 2xl:text-xl">Our Mission</div>
<div className="text-sm 2xl:text-md">To provide services that are tailored to the participants preferences to enable them to have a full life in the community.</div>
  </div><div className={`${theme==='dark'?'bg-zinc-900 text-slate-100':'bg-slate-100 text-slate-900'} w-full text-center flex p-4 flex-col align-middle justify-center items-center max-w-[400px] flex-1  shadow-lg`}>
<div className="w-16 h-16 relative"><Image src='/star.png' alt="star" fill  className="" /></div>
<div className="font-bold text-md md:text-lg 2xl:text-xl">Our Vision</div>
<div className="text-sm 2xl:text-md">To become one of the preferred healthcare providers in Maryland by caring for and supporting participants with intellectual and/or developmental disabilities to have a meaningful life in their chosen community.</div>
  </div><div className={`${theme==='dark'?'bg-zinc-900 text-slate-100':'bg-slate-100 text-slate-900'} w-full text-center flex p-4 flex-col align-middle justify-center items-center max-w-[400px] flex-1  shadow-lg`}>
<div className="w-16 h-16 relative"><Image src='/star.png' alt="star" fill  className="" /></div>
<div className="font-bold text-md md:text-lg 2xl:text-xl">Our Values</div>
<div className="text-sm 2xl:text-md">At Telecare Services, our values form the cornerstone of everything we do. Compassion, dignity, inclusivity, and respect guide our approach in empowering individuals to lead fulfilling lives with dignity and autonomy.</div>
  </div><div className={`${theme==='dark'?'bg-zinc-900 text-slate-100':'bg-slate-100 text-slate-900'} w-full text-center flex p-4 flex-col align-middle justify-center items-center max-w-[400px] flex-1  shadow-lg`}>
<div className="w-16 h-16 relative"><Image src='/star.png' alt="star" fill  className="" /></div>
<div className="font-bold text-md md:text-lg 2xl:text-xl">Our Motto
</div>
<div className="text-sm 2xl:text-md"> Our motto is “We Care”. At Telecare Services, we care deeply about our individuals, letting them direct us and determine the level of care. This is reflected in the services we offer
</div>
  </div>


</section>
    </div>
  )
}

export default Page