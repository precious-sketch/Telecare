import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Hero = () => {
  const images = [
    "/hero_1.jpg",
    "/hero_2.avif",
    "/hero_6.jpg",
    "/hero_4.webp",
    "/hero_5.webp",
    "/hero_7.jpg",
    "/hero_8.jpeg",
  ];

  const { theme } = useTheme();

  return (
    <div
      className={`relative ${
        theme === 'dark' ? 'bg-[#50391e] text-white' : 'bg-[#efe1cd] text-[#50391e]'
      } relative w-full h-full overflow-hidden`}
    >
      <Zoom
        scale={1.3}
        duration={4000} 
        transitionDuration={1000} 
        arrows={false}
        indicators={false}
        pauseOnHover={false}
        autoplay={true}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full  h-screen relative">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                filter: theme === 'dark' ? 'brightness(0.6)' : 'brightness(1)',
              }}
            />
          </div>
        ))}
      </Zoom>
      {/* <div className={`z-10 absolute top-0 right-0 left-0 bottom-0 w-full  h-full ${theme==='dark'?'bg-[radial-gradient(circle_at_center,#00000025,black)]':'bg-[radial-gradient(circle_at_center,#ffffff25,white)]'}`}></div> */}
 <div className={`z-10 absolute top-0 right-0 left-0 bottom-0 w-full  h-full ${theme==='dark'?'bg-[#644b2e]/40':'bg-[#efe1cd]/40'}`}></div>
<div className="absolute opacity-85 flex flex-col  top-1/2 w-[95%] -translate-y-1/2  left-1/2 -translate-x-1/2 p-4 pt-5 z-10"> <div className="w-full text-center py-2 z-10 font-extrabold  text-5xl max-lg:text-4xl max-md:text-3xl flex flex-row gap-2 flex justify-center"> <span className={` ${
        theme === 'dark' ? 'text-white' : 'text-black '
      } `} >TELECARE</span><span className={` ${
        theme === 'dark' ? 'text-white' : 'text-black '
      } `}>SERVICES </span>  </div> <span className={`text-lg max-md:text-md max-sm:text-sm text-center mb-2 max-w-[650px] mx-auto w-full  ${
        theme === 'dark' ? 'text-white' : 'text-black '
      }`}>We are committed to providing compassionate and comprehensive Home-based and Community-Focused Care services for individuals with intellectual and developmental disabilities across Maryland.</span>
 <Link
            href="/contact"
            className={`w-fit mt-1 px-4 mx-auto max-md:text-lg text-xl opacity-100 py-1.5 font-bold cursor-target ${
        theme === 'dark' ? 'bg-[#efe1cd] text-black' : 'bg-[#443000] text-white'
      }`}
          >
            Contact Us
          </Link>
    
 </div>
    </div>
  );
};

export default Hero;
