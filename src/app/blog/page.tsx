'use client'

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const Page = () => {
  
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
  return  (
    <main className={`${theme==='dark'?'bg-black text-white border-white':"bg-white text-black border-black"} min-h-screen py-24`}>
      
      <section className=" shadow-sm border-b border-gray-500">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-700">
            U.S. Health & Wellness News
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Trusted updates brought to you daily — health, wellness, medical research,
            fitness, and public health.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Latest Headlines</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     
          <article className={`${theme==='dark'?'bg-black text-white border-white':"bg-white text-black border-black"} shadow-lg  overflow-hidden hover:shadow-xl transition`}>
            <img
              src="https://images.unsplash.com/photo-1584466977773-e625c37cdd40"
              alt=""
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                CDC Releases New Seasonal Flu Guidelines
              </h3>
              <p className="text-gray-600 text-sm">
                The CDC updates preventive measures for the upcoming flu season, 
                emphasizing vaccination access and early detection.
              </p>
              <button className="mt-4 text-amber-600 font-medium hover:underline">
                Read more →
              </button>
            </div>
          </article>

          {/* Article 2 */}
          <article className={`${theme==='dark'?'bg-black text-white border-white':"bg-white text-black border-black"} shadow-lg  overflow-hidden hover:shadow-xl transition`}>
            <img
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
              alt=""
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                New Study Shows Rise in Mental Health Awareness
              </h3>
              <p className="text-gray-600 text-sm">
                A national study reveals increasing mental health awareness among 
                young adults, but highlights gaps in professional care access.
              </p>
              <button className="mt-4 text-amber-600 font-medium hover:underline">
                Read more →
              </button>
            </div>
          </article>

          {/* Article 3 */}
          <article className={`${theme==='dark'?'bg-black text-white border-white':"bg-white text-black border-black"} shadow-lg  overflow-hidden hover:shadow-xl transition`}>
            <img
              src="https://images.unsplash.com/photo-1580281657527-47dcb0a707e7"
              alt=""
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                USDA Updates Nutrition Guidelines for 2025
              </h3>
              <p className="text-gray-600 text-sm">
                The U.S. Department of Agriculture introduces new dietary guidance 
                with a focus on reducing sugar and improving heart health.
              </p>
              <button className="mt-4 text-amber-600 font-medium hover:underline">
                Read more →
              </button>
            </div>
          </article>

     
          {/* <article className={`${theme==='dark'?'bg-black text-white border-white':"bg-white text-black border-black"} shadow-lg  overflow-hidden hover:shadow-xl transition`}>
            <img
              src="https://images.unsplash.com/photo-1579154203451-c88f5ddf0f3b"
              alt="Healthcare Access"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Healthcare Access Expands Under New Federal Program
              </h3>
              <p className="text-gray-600 text-sm">
                New policies aim to expand primary care access across underserved
                communities in the U.S.
              </p>
              <button className="mt-4 text-amber-600 font-medium hover:underline">
                Read more →
              </button>
            </div>
          </article>

          
          <article className={`${theme==='dark'?'bg-black text-white border-white':"bg-white text-black border-black"} shadow-lg  overflow-hidden hover:shadow-xl transition`}>
            <img
              src="https://images.unsplash.com/photo-1612277795900-ec3cfeea8656"
              alt="Heart Disease Research"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Breakthrough in Heart Disease Research
              </h3>
              <p className="text-gray-600 text-sm">
                Scientists report a major breakthrough in early detection of heart 
                disease using AI-assisted imaging tools.
              </p>
              <button className="mt-4 text-amber-600 font-medium hover:underline">
                Read more →
              </button>
            </div>
          </article>

        
          <article className={`${theme==='dark'?'bg-black text-white border-white':"bg-white text-black border-black"} shadow-lg  overflow-hidden hover:shadow-xl transition`}>
            <img
              src="https://images.unsplash.com/photo-1587502536900-7d933b38a9a5"
              alt="Fitness Report"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                U.S. Fitness Report Highlights Decline in Activity
              </h3>
              <p className="text-gray-600 text-sm">
                A new national fitness report shows a continued decline in adult 
                physical activity rates and rising obesity statistics.
              </p>
              <button className="mt-4 text-amber-600 font-medium hover:underline">
                Read more →
              </button>
            </div>
          </article> */}
        </div>
      </section>
    </main>
  )
}

export default Page