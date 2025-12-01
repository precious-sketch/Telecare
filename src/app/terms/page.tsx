'use client';

import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TermsOfService: React.FC = () => {
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
          shadow-xl p-6 md:p-12 space-y-10
        `}
      >
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-sm opacity-70">Last updated: 27/11/2025</p>
        </div>

        <p className="leading-relaxed">
          Welcome to <strong>telecareservices.org</strong>. By accessing or using our
          website, services, or products, you agree to be bound by these Terms of Service.
          Please read them carefully.
        </p>

        <section className="space-y-3">
          <h2 className="section-title">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By using our website, you confirm that you are at least 18 years old and capable
            of entering into a legally binding agreement. If you do not agree to these terms,
            please discontinue use of our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="section-title">2. Use of Our Services</h2>
          <p>You agree to use our website only for lawful purposes. You must not:</p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Violate any applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use our services for harmful, malicious, or fraudulent activities</li>
            <li>Copy, distribute, or modify any website content without permission</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="section-title">3. Accounts & Security</h2>
          <p className="leading-relaxed">
            If certain features require an account, you are responsible for maintaining the
            confidentiality of your login credentials. Notify us immediately if you suspect
            unauthorized access or security breaches.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="section-title">4. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content on this website—including graphics, text, logos, and software—is the
            property of <strong>Telecare Services</strong> or its licensors. You may not
            reproduce, distribute, or create derivative works without prior written consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="section-title">5. Third-Party Links</h2>
          <p className="leading-relaxed">
            Our website may link to third-party services or websites. We are not responsible
            for their content or privacy practices. Access third-party links at your own
            discretion.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="section-title">6. Termination</h2>
          <p className="leading-relaxed">
            We may suspend or terminate your access at any time without notice if your
            behavior violates these terms or is harmful to our website or users.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="section-title">7. Limitation of Liability</h2>
          <p className="leading-relaxed">
            We are not liable for damages resulting from your use—or inability to use—our
            services, including loss of data, revenue, or business opportunities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="section-title">8. Changes to These Terms</h2>
          <p className="leading-relaxed">
            We may update these Terms of Service as needed. Continued use of our website
            indicates acceptance of any revised terms posted on this page.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="section-title">9. Contact Us</h2>
          <p>If you have any questions regarding these terms, feel free to reach us:</p>

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

      <style jsx>{`
        .section-title {
          @apply text-2xl font-semibold;
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;
