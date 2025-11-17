'use client'

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTelegram, FaLinkedin, FaFacebook, FaWhatsapp,  } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
  const timer = setTimeout(() => setMounted(true), 0);
   if(typeof window!= undefined){
   setTheme(localStorage.getItem('theme')||'dark')
    }
  return () => clearTimeout(timer);
  }, []);
  
  
  if (!mounted) return null;
  return (
    <footer className={`border-t border-gray-500  ${theme==='dark'?'bg-black text-gray-400':' bg-white text-gray-600'}  font-sans pb-2 footer`}>
      <div className=" m-0 mx-auto px-[3%]">
        {/* Social media and other links */}
        <div className="w-full flex-row flex items-center pb-8">
     
          <Link
            href="https://fb.com/telecareservices"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group border border-gray-500 w-full flex-1 py-5  border-t-0 border-r-0"
          >
            <span className="text-2xl group-">
              <FaFacebook />
            </span>
            <span className="mt-2 text-sm uppercase max-sm:hidden">Facebook</span>
          </Link>
          <Link
            href="https://x.com/telecareservice"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group border border-gray-500 w-full flex-1 py-5 border-t-0 border-r-0"
          >
            <span className=" text-2xl group-">
              <FaInstagram />
            </span>
            <span className="mt-2 text-sm uppercase max-sm:hidden">Instagram</span>
          </Link>
       
          <Link
            href="https://www.whatsapp.com/telec"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group border border-gray-500 w-full flex-1 py-5 border-t-0"
          >
            <span className="text-2xl group-">
              <FaWhatsapp />
            </span>
            <span className="mt-2 text-sm uppercase max-sm:hidden">Whatsapp</span>
          </Link>
        </div>

        {/* Main footer content */}
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Portal Description */}
          <div className="lg:col-span-1 text-gray-500/80">
            <div className="border border-gray-500/80 relative">
              <h3 className="text-lg font-bold p-1 px-3  border-b  border-gray-600/60">Telecare Services</h3>
              <p className="text-sm p-3 text-justify">
               Our mission is rooted in empowering persons with disability to live fulfilling, independent lives within their communities.
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Services</h4>
        <ul className="space-y-1 text-sm">
              <li className="">
                <Link href="/" className="">
                  Personal Support
                </Link>
               </li>
              <li>
                <Link href="/" className="">
                  Supported Living
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Nursing Support
                </Link>
              </li>
              <li>
                <Link href="/" className=" font-extrabold">
                  And more
                </Link>
              </li>
            </ul>
          </div>

    

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Pages</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Publications & Contact */}
          <div className="lg:col-span-1 flex flex-col">
              <h4 className="text-lg font-semibold mb-3">Talk To Us</h4>
              <ul className="space-y-1 text-sm flex flex-col">
                <li>
                  <Link href="mailto:info@telecareservices.org" className="">
                    info@telecareservices.org
                  </Link></li> <li>
                  <Link href="mailto:emem@telecareservices.org" className="">
                    emem@telecareservices.org
                  </Link>
                </li>
            
                <li>
                  <Link href="tel:+14432493285" className="">
                   +1 (443) 249-3285
                  </Link>
                </li>
                <li>
                  <Link href="tel:+13015760555" className="">
                  +1 (301) 576-0555
                  </Link>
                </li>
              </ul>
          </div>
        </div>

        <div className="my-6 mb-0 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-gray-500/30 pt-6 space-x-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
            <Link href="/" className="">
              Privacy Policy
            </Link>
            <Link href="/" className="">
              Cookie Policy
            </Link>
            <Link href="/" className="">
              Terms of Service
            </Link>
          </div>
         
         
          
          <div className="mb-3 flex-row flex flex-wrap gap-1">
            <b>Address: </b>
            <p> 
             165 Log Canoe Circle, Suite G
Stevensville, MD 21666
            </p>
          </div>
          <p className="mb-3">
            &copy; 2025 Telecare Services, Inc. All rights reserved
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;