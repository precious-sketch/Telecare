'use client';

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
    <div
      className={`
        min-h-screen w-full 
        ${theme === "dark" ? "bg-black text-white" : "bg-zinc-100 text-zinc-900"}
        flex justify-center px-4 py-32
      `}
    >
      <div
        className={`
          w-full max-w-4xl 
          ${theme === "dark" ? "bg-zinc-900/60 backdrop-blur-lg" : "bg-white/70 backdrop-blur-lg"}
          shadow-xl  p-6 md:p-12 space-y-10
        `}
      >
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
          <p className="text-sm opacity-70">Last updated: 27/11/2025</p>
        </div>

        {/* Intro */}
        <p className="leading-relaxed">
          This Cookie Policy explains how we use cookies and similar technologies on our
          platform. By using our website, you consent to the use of cookies as described
          below.
        </p>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="section-title">1. What Are Cookies?</h2>
          <p className="leading-relaxed">
            Cookies are small text files stored on your device when you visit a website.
            They help ensure proper functionality, improve user experience, and provide
            insights into how our site is used.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="section-title">2. Types of Cookies We Use</h2>

          <div className="space-y-4">
            <div>
              <h3 className="sub-title">a. Essential Cookies</h3>
              <p className="leading-relaxed">
                These are required for core functionality including security, network
                management, and accessibility.
              </p>
            </div>

            <div>
              <h3 className="sub-title">b. Performance & Analytics Cookies</h3>
              <p className="leading-relaxed">
                These help us understand how visitors use the site by collecting anonymous
                analytics data.
              </p>
            </div>

            <div>
              <h3 className="sub-title">c. Functional Cookies</h3>
              <p className="leading-relaxed">
                These allow the site to remember preferences, such as language or region.
              </p>
            </div>

            <div>
              <h3 className="sub-title">d. Advertising & Marketing Cookies</h3>
              <p className="leading-relaxed">
                These track browsing habits to deliver personalized ads and measure marketing
                effectiveness.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="section-title">3. How We Use Cookies</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Remember user preferences</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Personalize content and enhance user experience</li>
            <li>Deliver relevant advertisements</li>
            <li>Support login, authentication, and session features</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="section-title">4. Third-Party Cookies</h2>
          <p className="leading-relaxed">
            We may use third-party analytics or advertising partners who place their own
            cookies. These are governed by each third party’s individual cookie and privacy
            policies.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="section-title">5. Managing Cookies</h2>
          <p className="leading-relaxed">
            You can control or delete cookies through your browser settings. Note that
            disabling some may impact website functionality.
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
            <li>Microsoft Edge</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="section-title">6. Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Cookie Policy from time to time. Updates will be posted on
            this page with a revised date.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="section-title">7. Contact Us</h2>
          <p>If you have any questions, please reach us at:</p>

          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>
                <a href="https://telecareservices.org">www.telecareservices.org</a>
              </strong>
            </li>
            <li>
              Email:{" "}
              <strong>
                <Link href="mailto:info@telecareservices.org">
                  info@telecareservices.org
                </Link>
              </strong>
            </li>
            <li>
              Phone:{" "}
              <strong>
                <Link href="tel:+14432493285">+1 (443) 249-3285</Link>
              </strong>
            </li>
          </ul>
        </section>
      </div>

      {/* Shared title styling */}
      <style jsx>{`
        .section-title {
          @apply text-2xl font-semibold;
        }
        .sub-title {
          @apply text-lg font-medium;
        }
      `}</style>
    </div>
  );
};

export default CookiePolicy;
