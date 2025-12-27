'use client'

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



const locations = [
  {
    name: "Cambridge Home",
    mapEmbedUrl: "https://www.google.com/maps?q=206%20S%20Regulator%20Dr,%20Cambridge,%20MD%2021613&output=embed"
    
  },
  {
    name: "Silver Spring Home",
    mapEmbedUrl:
      "https://www.google.com/maps?q=13220%20Schubert%20Place,%20Silver%20Spring%20MD%2020904&output=embed",
  },
  {
    name: "Ridgely Home",
     mapEmbedUrl:
      "https://www.google.com/maps?q=111%20West%201st%20Street,%20Ridgely,%20MD%2021660&output=embed",
  
  },
  {
    name: "Centerville Home",
  
   
    mapEmbedUrl:
      "https://www.google.com/maps?q=207%20W%20Water%20St,%20Centreville,%20MD&output=embed",
  }
];


export default function LocationsPage() {
    
  const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
useEffect(() => {
const timer = setTimeout(() => setMounted(true), 0);
if(typeof window!= undefined){
setTheme(localStorage.getItem('theme')||'dark')}
return () => clearTimeout(timer);
}, []);

  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.substring(1);

    let attempts = 0;
    const maxAttempts = 20;

    const interval = setInterval(() => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        clearInterval(interval);
      }

      attempts++;
      if (attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100); // retry every 100ms

    return () => clearInterval(interval);
  }, [pathname]);

if (!mounted) return null;
  return (
     <div
  className={` ${
    theme === 'dark'
      ? 'text-zinc-50 bg-[#644b2e]'
      : 'text-[#644b2e] bg-[#efe1cd]'
  } w-full min-h-screen h-full  mx-auto pb-10`}>
          <section className="w-full relative min-h-[250px] h-[40vh] max-h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `url(/map_pix.png)`,
                filter: theme === 'dark' ? 'brightness(0.6)' : 'brightness(1)',
              }}>
     
              <div className={`z-10 absolute top-0 right-0 left-0 bottom-0 w-full  h-full ${theme==='dark'?'bg-[radial-gradient(circle_at_center,#644b2e35,#644b2e)]':'bg-[radial-gradient(circle_at_center,#efe1cd35,#efe1cd)]'}`}></div>
               <div className="absolute max-w-[500px]   bottom-0 left-0 w-full p-3 py-2 z-10 font-extrabold text-5xl max-xl:text-4xl max-md:text-3xl flex flex-row gap-2"> <span  className={` ${
        theme === 'dark' ? 'text-white' : 'text-black'
      } `} >OUR</span><span  className={` ${
        theme === 'dark' ? 'text-white' : 'text-black'
      } `} >LOCATIONS</span>  </div>
</section>
<div className="w-full grid lg:grid-cols-2 px-[3%] py-16 gap-10 justify-items-center-safe">
      {locations.map((location, index) => (
        <section key={index}  id={index.toString()}  className={`${
          theme === 'dark' ? 'bg-[#50391e] text-zinc-50' : 'bg-[#fff9f0] text-[#644b2e]'
        } shadow-lg hover:shadow-2xl hover:scale-105 p-2 py-5 w-full overflow-hidden transition `}
      >
          <h2 className="text-2xl md:text-3xl font-bold">
            {location.name}
          </h2>

          <div className="mt-4 w-full h-[400px]  overflow-hidden shadow">
            <iframe
              src={location.mapEmbedUrl}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      ))}</div>
    </div>
  );
}
