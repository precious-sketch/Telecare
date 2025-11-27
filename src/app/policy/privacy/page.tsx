'use client'

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
    <div className={`max-w-4xl mx-auto p-[3%] py-32 space-y-6 ${theme==='dark'?'bg-black text-white':'bg-zinc-50 text-zinc-900'}`}>
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-gray-500">Last Updated: 27/11/2025</p>

      <section className="space-y-4">
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard your
          information when you visit <strong>telecareservices.org</strong>.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <h3 className="text-xl font-medium">A. Personal Information</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Message</li>
        </ul>

        <h3 className="text-xl font-medium">B. Automatically Collected Information</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>IP address</li>
          <li>Browser type and device information</li>
          <li>Usage data (pages visited, time spent, etc.)</li>
          <li>Cookies and tracking technologies</li>
        </ul>

      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Providing and improving our services</li>
          <li>Processing requests</li>
          <li>Enhancing user experience</li>
          <li>Sending service-related communications</li>
          <li>Ensuring security and preventing fraud</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">3. How We Share Your Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>With service providers (hosting, payment, analytics, etc.)</li>
          <li>For legal compliance</li>
          <li>During business transfers</li>
          <li>With your consent</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">4. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies to improve performance, remember preferences, and analyze platform
          usage. You may disable cookies in your browser settings.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">5. Data Security</h2>
        <p>
          We apply reasonable safeguards to protect your information, but no method of
          transmission online is completely secure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">6. Your Rights and Choices</h2>
        <p>You may have rights to access, correct, delete, or restrict your personal data.</p>
        <p>To exercise these rights, contact us at: <strong>info@telecareservices.org</strong></p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
        <p>
          Our platform link to third-party sites - google maps. We are not responsible for their
          privacy practices.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">8. Children’s Privacy</h2>
        <p>
          We do not knowingly collect data from children under 13. If such data is discovered,
          we will delete it immediately.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. The Last Updated date will be
          revised accordingly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">10. Contact Us</h2>
        <p>
          For questions regarding this Privacy Policy, reach us at:
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
      </section>
    </div>
  );
}