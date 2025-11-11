import React from 'react'
import 'react-slideshow-image/dist/styles.css'

import { Zoom } from 'react-slideshow-image';
import Image from 'next/image';
import { useTheme } from 'next-themes';

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
    
  const { theme, setTheme } = useTheme();
  return (
    <div className={`${theme==='dark' ?'bg-black': 'bg-white'} w-full h-fit relative`}>
     <Zoom
  easing="cubic"
  scale={1.4}
  arrows={false}
  pauseOnHover={false}
>
  
            {images.map((each, index) => (
                <div key={index} className='w-full h-screen'>
                    <Image fill className='object-cover w-full opacity-50 h-full' alt="Slide Image" src={each} />
                </div>
            ))}
        </Zoom>
        <div className="absolute max-w-[800px] min-w-[400px] flex flex-col bottom-3 left-3 w-1/4 ">
            <span className='font-extrabold text-4xl max-sm:text-2xl max-md:text-3xl'>Telecare Services</span>
            <span className='text-md text-justify max-md:text-sm max-sm:text-xs'>we’re committed to providing compassionate and comprehensive Home-based and Community-Focused Care services for individuals with intellectual and developmental disabilities across Maryland.</span>
        </div>
        </div>
  )
}

export default Hero