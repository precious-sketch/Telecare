'use client'

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
     <div className={`max-w-4xl mx-auto p-[3%] py-32 space-y-6 ${theme==='dark'?'bg-black text-white':'bg-zinc-50 text-zinc-900'}`}>
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="ext-xl font-semibold mb-3">7. Limitation of Liability</p>
      <p className="text-gray-700 mb-6">Last updated: 27/11/2025</p>

      <p className=" mb-6">
        Welcome to telecareservices.org. By accessing or using our website, services,
        or products, you agree to be bound by these Terms of Service. Please
        read them carefully.
      </p>

      <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
      <p className=" mb-6">
        By using our website, you confirm that you are at least 18 years old and
        capable of entering into a legally binding agreement. If you do not
        agree to these terms, please do not use our services.
      </p>

      <h2 className="text-xl font-semibold mb-3">2. Use of Our Services</h2>
      <p className=" mb-4">
        You agree to use our website and services only for lawful purposes and
        in accordance with these terms. You must not:
      </p>
      <ul className="list-disc ml-6 mb-6 ">
        <li>Violate any applicable laws or regulations</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Use our services for fraudulent or harmful activities</li>
        <li>Copy or distribute any part of the website without permission</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold mb-3">3. Accounts & Security</h2>
      <p className=" mb-6">
        If an account is required to use certain features, you are responsible
        for maintaining the confidentiality of your login details. You agree to
        notify us immediately of any unauthorized access or breach of security.
      </p>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
      <p className=" mb-6">
        All content on this website—including text, graphics, logos, and
        software—is the property of [Your Company] or its licensors. You may not
        reproduce, distribute, or create derivative works without written
        permission.
      </p>


      <h2 className="text-xl font-semibold mb-3">5. Third-Party Links</h2>
      <p className=" mb-6">
        Our website may contain links to third-party sites. We are not
        responsible for the content, policies, or practices of third-party
        websites. Access them at your own risk.
      </p>

      <h2 className="text-xl font-semibold mb-3">6. Termination</h2>
      <p className=" mb-6">
        We reserve the right to suspend or terminate your access to our services
        at any time, without notice, for conduct that violates these terms or is
        otherwise harmful to our business or users.
      </p>

      <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
      <p className=" mb-6">
        We are not liable for any damages arising from your use or inability to
        use our services, including but not limited to loss of data, revenue, or
        business opportunities.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        8. Changes to These Terms
      </h2>
      <p className=" mb-6">
        We may update these Terms of Service from time to time. Changes will be
        posted on this page with the updated effective date. Continued use of
        our services indicates acceptance of the revised terms.
      </p>

      <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
      <p className="">
        If you have any questions about these Terms of Service, please contact
        us at:
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

export default TermsOfService;
