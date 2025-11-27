'use client'

import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CookiePolicy: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    if(typeof window!= undefined){
    setTheme(localStorage.getItem('theme')||'dark')}
    return () => clearTimeout(timer);
    }, []);
    
    useEffect(() => {
    window.history.scrollRestoration = "manual";
    }, []);
    
    if (!mounted) return null;
  return (
  <div className={`max-w-4xl mx-auto p-[3%] py-32 space-y-6 ${theme==='dark'?'bg-black text-white':'bg-zinc-50 text-zinc-900'}`}>
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-gray-700 mb-4">Last updated: 27/11/2025</p>

      <p className="mb-6 ">
        This Cookie Policy explains how we use cookies and similar technologies
        on our website. By using our website, you consent to the use of cookies
        as described in this policy.
      </p>

      <h2 className="text-xl font-semibold mb-3">1. What Are Cookies?</h2>
      <p className="mb-6 ">
        Cookies are small text files stored on your device when you visit a
        website. They help the website function properly, improve your user
        experience, and provide insights into how the site is being used.
      </p>

      <h2 className="text-xl font-semibold mb-3">2. Types of Cookies We Use</h2>

      <h3 className="font-medium mt-4 mb-2">a. Essential Cookies</h3>
      <p className=" mb-4">
        Required for core functionality such as security, network management,
        and accessibility. These cannot be disabled.
      </p>

      <h3 className="font-medium mb-2">b. Performance & Analytics Cookies</h3>
      <p className=" mb-4">
        These help us understand how visitors interact with our website by
        collecting anonymous usage data.
      </p>

      <h3 className="font-medium mb-2">c. Functional Cookies</h3>
      <p className=" mb-4">
        These allow the website to remember user preferences such as language or
        region.
      </p>

      <h3 className="font-medium mb-2">d. Advertising & Marketing Cookies</h3>
      <p className=" mb-6">
        These track browsing habits to deliver more relevant ads and measure
        campaign effectiveness.
      </p>

      <h2 className="text-xl font-semibold mb-3">3. How We Use Cookies</h2>
      <ul className="list-disc ml-6 mb-6 ">
        <li>Remember user preferences</li>
        <li>Analyze traffic and usage</li>
        <li>Personalize content</li>
        <li>Serve relevant advertisements</li>
        <li>Support login, authentication, and session features</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">4. Third-Party Cookies</h2>
      <p className=" mb-6">
        We may allow third-party analytics or advertising services to place
        cookies to help us analyze usage or deliver personalized ads. These
        third parties have their own cookie and privacy policies.
      </p>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold mb-3">5. Managing Cookies</h2>
      <p className=" mb-4">
        You can control or delete cookies through your browser settings. Blocking
        some cookies may affect site functionality.
      </p>

      <ul className="list-disc ml-6  mb-6">
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Safari</li>
        <li>Microsoft Edge</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">6. Changes to This Policy</h2>
      <p className=" mb-6">
        We may update this Cookie Policy periodically. Changes will be posted on
        this page with the updated date.
      </p>

      <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
      <p className="">
        If you have any questions, please contact us at:
      </p>

       <ul className="list-disc ml-6">
             <li><strong><a href="https://telecareservices.org">www.telecareservices.org</a></strong></li>
             <li>Email: <strong> <Link href="mailto:info@telecareservices.org" className="">
                       info@telecareservices.org
                     </Link></strong></li>
             <li>Phone: <strong><Link href="tel:+14432493285" className="">
                      +1 (443) 249-3285
                     </Link></strong></li>
           </ul>
    </div>
  );
};

export default CookiePolicy;
