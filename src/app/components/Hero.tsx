import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
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

  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
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
          <div key={index} className="w-full opacity-50 h-screen relative">
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
<div className="absolute max-w-[500px] opacity-85 flex flex-col bottom-0 left-0 w-full p-4  z-10"> <span className='font-extrabold text-7xl max-sm:text-5xl max-md:text-4xl'>Telecare Services</span> <span className='text-lg max-md:text-md max-sm:text-sm text-justify'>We are committed to providing compassionate and comprehensive Home-based and Community-Focused Care services for individuals with intellectual and developmental disabilities across Maryland.</span> </div>
    </div>
  );
};

export default Hero;
