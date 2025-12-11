'use client';

import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PrivacyPolicy() {
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
        ${theme === "dark" ? "bg-[#71583c] text-white" : "bg-[#fff9f0] text-[#644b2e]"}
        flex justify-center px-4 py-32
      `}
    >
      <div
        className={`
          w-full max-w-4xl 
          ${theme === "dark" ? "bg-[#644b2e]/60 backdrop-blur-lg" : "bg-[#efe1cd]/70 backdrop-blur-lg"}
          shadow-xl  p-6 md:p-12 space-y-10
        `}
      >
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-sm opacity-70">Last Updated: 27/11/2025</p>
        </div>

        {/* Section Template */}
        <section className="space-y-4 leading-relaxed">
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit <strong>telecareservices.org</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="section-title">1. Information We Collect</h2>

          <h3 className="sub-title">A. Personal Information</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Message</li>
          </ul>

          <h3 className="sub-title">B. Automatically Collected Information</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>IP address</li>
            <li>Browser type & device details</li>
            <li>Usage analytics (pages visited, time spent, etc.)</li>
            <li>Cookies and tracking technology</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="section-title">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Providing and improving our services</li>
            <li>Processing user requests</li>
            <li>Enhancing user experience</li>
            <li>Sending service-related updates</li>
            <li>Ensuring security and preventing fraud</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="section-title">3. How We Share Your Information</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>With service providers (hosting, analytics, etc.)</li>
            <li>When required for legal compliance</li>
            <li>During mergers or business transfers</li>
            <li>With your consent</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">4. Cookies and Tracking</h2>
          <p>
            We use cookies to optimize performance, remember preferences, and analyze usage.
            You may disable cookies in your browser settings.
          </p>
        </section>

        <section>
          <h2 className="section-title">5. Data Security</h2>
          <p>
            We apply reasonable safeguards to protect your information, but no online
            transmission is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="section-title">6. Your Rights & Choices</h2>
          <p>You may request access, correction, deletion, or restriction of your data.</p>
          <p>
            Contact us at: <strong>info@telecareservices.org</strong>
          </p>
        </section>

        <section>
          <h2 className="section-title">7. Third-Party Links</h2>
          <p>
            Our platform may link to third-party services such as Google Maps. We are not
            responsible for their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="section-title">8. Children’s Privacy</h2>
          <p>
            We do not knowingly collect information from children under 13. Any such data will
            be removed immediately.
          </p>
        </section>

        <section>
          <h2 className="section-title">9. Policy Updates</h2>
          <p>
            We may update this Privacy Policy periodically. The updated date will always be
            displayed.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="section-title">10. Contact Us</h2>
          <p>For inquiries, reach us at:</p>

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

      {/* Section Title Styling */}
      <style jsx>{`
        .section-title {
          @apply text-2xl font-semibold mb-1;
        }
        .sub-title {
          @apply text-xl font-medium mt-4;
        }
      `}</style>
    </div>
  );
}
