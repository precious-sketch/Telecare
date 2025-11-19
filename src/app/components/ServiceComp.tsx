'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
 const services = [
  {
    title: "Personal Support",
    img: "/service_1.jpg",
    desc: "Our personal support services are personalized according to the individual participant needs. We provide full assistance for fostering independence with an improved ability to perform activities of daily living.",
    content_paragraphs: [
      "At Telecare Services Inc., we think that first-rate personal care is the foundation of dignity.  Our Personal Support services are tailored to help each client with everyday tasks that may be challenging because of their age, disability, or injury.  Respecting individual preferences, we work closely with our client and their family to create a customised care plan.  We make sure that morning and evening rituals are carried out respectfully and privately.",
      "Our caring carers have received specialised training in sensitive care for dressing, grooming, bathing, and using the restroom.  Building trust with each client is crucial for our staff because we understand how difficult it can be to acknowledge when assistance is needed in these areas.  By upholding the highest standards of personal hygiene and appearance, we boost the confidence and self-worth of people we assist, empowering them to face the day with optimism.",
      "Personal care encompasses mobility and transfer safety in the home setting in addition to basic hygiene.  Our top priority is safety, whether we are moving a client from bed into a wheelchair, offering assistance with a walking aid, or simply providing a steadying arm to prevent falls.  Our team uses a variety of home environment assessments to reduce risks and guarantee that our clients can move around their homes safely and comfortably.",
      "We also recognise that companionship and emotional well-being are important components of personal support, which goes beyond just providing physical aid.  Feelings of loneliness that frequently accompany restricted mobility are lessened by the kind face and sympathetic ear that our carers offer.  We offer a comprehensive approach to supporting a whole person by offering personal care, conversation, and assistance with light housekeeping or meal preparation.",
      "Finally, we offer very adaptable and flexible personal support services.  We constantly review and modify our care plans because we understand that needs change over time.  Telecare Services, helps people to stay independent in the comfort of their own homes for as long as possible, whether they need long-term support for a chronic condition or short-term assistance while recuperating from surgery."
    ]
  },
  {
    title: "Supported Living",
    img: "/service_2.jpg",
    desc: "Our supported living services aim to give people a home where they can thrive and feel encouraged to lead happy, fulfilling lives in their communities.",
    content_paragraphs: [
      "Telecare Services supported living program is based on the idea that everyone has a right to a place to live, regardless of their support needs.  Instead of placing people with disabilities in institutional settings, we offer a flexible yet structured environment that allows them to live in their own homes or apartments.  By giving our clients control over daily decisions, such as meal selections and home décor, this model fosters a sense of independence and ownership.",
      "An essential component of our Supported Living program is life skills training.  Budgeting, cooking, cleaning, and laundry are just a few of the skills that our direct support specialists teach clients side by side.  By dividing chores into manageable chunks, we promote independence in every facet of running their home.  This method of teaching fosters a sense of achievement and gets people ready for greater independence when they want it.",
      "Safety is the cornerstone of our service, even though we value independence.  Depending on what each person needs, we provide varying degrees of supervision, from drop-in assistance to round-the-clock availability.  Families can rest easy knowing that their loved ones are safe in their homes because our staff is always prepared to handle emergencies, oversee medication, and offer health and safety advice.",
      "Emotional well-being depends on social integration, and our Supported Living programs actively promote community ties. We help our clients stay in touch with their neighbours, host friends, and take part in neighbourhood events.",
      "Our ultimate goal is to help individuals design a life that reflects their unique personality and aspirations. By living in the general community rather than in isolation, our clients develop natural support networks and enjoy a sense of belonging that is very enriching to their lives.", "We work with case managers and families to establish attainable personal objectives, such as pursuing hobbies, education, or just keeping a stable home life. We are committed to removing obstacles to independence and demonstrating that living independently is possible with the correct assistance."
    ]
  },
  {
    title: "Nursing Support",
    img: "/service_3.jpg",
    desc: "Our nursing support services are customised to meet the unique needs of participants who need medical attention and special care from licensed healthcare providers.",
    content_paragraphs: [
      "Through our special Nursing Support services, Telecare Services integrates clinical healthcare with everyday living assistance.  Through a staff of certified RNs and LPNs, we provide the client with direct access to medical knowledge and assistance.  When a person's medical conditions are so complicated that some degree of clinical supervision is needed to keep them safely in their community rather than in a hospital or assisted living facility, this is a crucial service.",
      "A crucial component of our nursing care is medication management.  To prevent negative drug interactions or missed doses, our nurses are in charge of ensuring that all prescriptions are administered at the appropriate time and dosage.  Additionally, they manage refills and speak with doctors and pharmacies directly on the family member's behalf, which removes a significant portion of the administrative burden associated with medical management.",
       "Special medical services that go beyond basic caregiving can be provided by the caregiving team.  Wound care, catheter maintenance, tube feeding, and vital sign monitoring for long-term conditions like diabetes and hypertension are a few services.  To reduce the number of hospital visits, we take pride in providing this level of care in your home.",
      "In addition to providing direct care, our nurses play a crucial role as a client's liaison with their larger healthcare network.  During medical consultations, we make appointments with specialists, interpret medical instructions for the client and their support personnel, and speak up for the client's health needs.  As a result, all aspects of the client's health are coordinated and effectively managed, resulting in continuity of care",
       "Another important pillar of our nursing support is education.  We teach clients, family members, and other support personnel how to identify symptoms of illness and how to treat specific conditions.  We further enhance the safety of our client's surroundings by equipping the support system with medical expertise.  Telecare Services is dedicated to providing compassionate clinical excellence"
    ]
  },
  {
    title: "Community Development Services (CDS)",
    img: "/service_4.jpg",
    desc: "CDS is focused on encouraging social inclusion, community involvement, and active participation in various community contexts.",
    content_paragraphs: [
      "The goal of Telecare Services,'s community development services is to dismantle the barriers of isolation that many people with disabilities encounter.  A full life, in our opinion, involves actively engaging with the world beyond one's front door.  Our CDS program ensures that our clients are visible and respected members of the community by facilitating access to public events, recreational centres, libraries, and community resources.",

"The development of relationships and social skills are the main goals of this service.  In order to assist clients in navigating social nuances and forming enduring friendships, our support staff goes with them to social events, clubs, and religious services.  In order to provide stability for long-term emotional well-being and true inclusion, we strive to help the person build a natural support system friends and acquaintances who are not paid carers.",
"Our CDS program also heavily emphasises civic engagement.  Whether it's at a neighbourhood food bank, community garden, or animal shelter, we help clients find volunteer opportunities that fit their interests and skills.  Giving back to the community gives our clients a strong sense of purpose, boosts their self-esteem, and shows the world what they are capable of. ",
       "We also deal with community integration's practical issues, such as transportation training.  Our employees instruct customers on safe route navigation, scheduling, and public transportation usage.  Customers can access entertainment, shopping, and services without completely relying on others for transportation when they learn how to get around town on their own.",
      "At Telecare Services, we tailor each CDS plan to include things the individual particularly enjoys. If a client loves art, we find local pottery classes; if they love sports, we look for local leagues or spectator events. By focusing on what brings the individual joy, we take the concept of community integration and turn it into a fun, enriching reality that enhances their quality of life."
    ]
  },
  {
    title: "Respite Care",
    img: "/service_5.jpg",
    desc: "Through respite care services, we provide carers with short-term relief.  While the participant receives ongoing care, these services enable carers to refuel and provide temporary relief.",
    content_paragraphs: [
      "It is a fulfilling but difficult labour of love to care for a loved one who has a disability or age-related needs.  Our Respite Care program is designed to provide the silent heroes, or primary carers, with short-term, temporary relief so they can take a vacation, take care of their own medical needs, or just relax and rejuvenate knowing their loved one is safe.",
       "To accommodate the various needs of families, we provide flexible scheduling options.  Our staff is prepared to help, whether you need assistance for a few hours to run errands, overnight care for a weekend getaway, or longer support during a family emergency.  A healthy long-term caregiving relationship at home depends on preventing carer burnout, which is made possible by this flexibility.",
"The respite period is intended to cause the least amount of disturbance to the participant's daily schedule.  Before the primary carer leaves, we spend time getting to know the person's dietary requirements, medication schedules, habits, and preferences.  A very seamless transition of care is made possible by this advance planning, which lessens the participant's anxiety about their family member's absence and makes them feel safe, secure, and well-cared for. ",
       "Respite care is more than just babysitting it's a fun experience for the recipient.  To make the time spent apart from the primary carer enjoyable, our staff is equipped with games, activities, and conversation.  We see respite as a mini-vacation for the client as well, providing them with a change of scenery and the chance to meet new people in a safe setting.",
      "In the end, the family is strengthened by respite care.  Carers can return to their caregiving role with fresh vigour and patience when they are able to take a break and concentrate on their own well-being.  Knowing that both the carer and the care recipient will remain well, content, and supported, Telecare Services LLC is pleased to offer this safety net."
    ]
  },
  {
    title: "Employment Services",
    img: "/service_6.jpg",
    desc: "At Telecare Services, we are committed to empowering individuals with disabilities through a comprehensive approach to employment. We focus on helping each individual find meaningful and long-term employment that best utilizes their skills and aspirations.",
    content_paragraphs: [
      "We believe that employment is a prime driver of independence and self-worth. Telecare Services provides specialized Employment Services to support individuals with disabilities in their pursuit of job market success. Our process starts with a thorough discovery phase, during which time we assess the individual's skills, interests, and strengths to identify career paths that offer genuine satisfaction and sustainability.",
      "Once a job-oriented objective has been established, we take the active approach of offering hands-on assistance with the job search process; this includes resume writing workshops, preparation for interviews, and how to go about making an application. We realize the hiring process can be intimidating, so we conduct mock interviews to teach soft skills such as punctuality, communication, and workplace etiquette so our clients can give a good first impression.",
      "Our support does not end when an individual receives a job offer. We also provide on-site job coaching and support during the initial phase of employment to assist the individual to learn their new job duties and also adapt to the culture of the workplace. We work alongside clients to master the occupation, fading support as the individual becomes confident and competent, thus ensuring they become a fully integrated and productive member of the team.",
      "Advocacy plays a major role in our Employment Services. We work with employers to identify and implement reasonable accommodations that enable our clients to perform their jobs effectively. By educating employers about the benefits of an inclusive workforce, we help create supportive work environments that value individuals with disabilities for their talents and contributions rather than their limitations.",
      "Long-term job retention is our ultimate metric of success. We keep in constant contact with both the employee and the employer to work out challenges and provide retraining or mediation as needed. Telecare Services is committed to making jobs into careers for our clients, with the financial independence and social connections that valuable work provides."
    ]
  },
  {
    title: "Adult Residential Services",
    img: "/service_7.jpg",
    desc: "At Telecare Services, we believe that adults with special needs require a caring and nurturing environment. Our Adult Residential Services have become a comforting and supportive home for a number of people - a place where they can grow and thrive.",
    content_paragraphs: [
      "Our Adult Residential Services provide a warm, family-like atmosphere for individuals who need 24-hour support, but would prefer to live in the community rather than an institution. The group homes managed by Telecare Services are safe, accessible, and comfortably furnished. We work hard at providing a genuine 'home' for residents to experience belongingness, safety, and companionship among their housemates.",
      "The staffing in our residential homes is comprehensive and attentive. We provide round-the-clock supervision to assist with every aspect of daily life, including meal preparation and housekeeping, personal hygiene, and medication administration. Our staff are trained in both behavioral challenges and medical needs so that residents are kept safe at all times while still maintaining their privacy and dignity.",
      "Community is built around the dining table and the living room. We also encourage communal living dynamics where the residents share meals, celebrate their birthdays, and enjoy leisure time together. It is important, for this reason, for combating loneliness and helping a resident build social skills. However, we also respect the need for individual time, ensuring each resident has their own personalized space to retreat to.",
      "Each resident in our care has an Individualized Support Plan that outlines how we will provide services for that individual. We work with the individual to establish personal goals, such as learning to do laundry, developing better communication skills, or managing personal finances. Our residential staff actively works on those goals each day, making the residence a place of ongoing learning and growth.",
      "We maintain an open-door policy for families and encourage their active involvement in the lives of our residents. We also facilitate visits, home trips, and regular communication to keep family bonds intact. It is our commitment at Telecare Services that we turn the residential homes into a place of joy, dignity, and comfort, allowing adults with special needs to live life to the fullest."
    ]
  },
  {
    title: "Remote Support Services",
    img: "/service_8.jpg",
    desc: "Our Remote Support Services allow individuals to stay independent but offer real-time support when it is needed. With the help of advanced technology and proficient support, we provide:",
    content_paragraphs: [
      "Telecare Services provides Remote Support Services as a modern alternative or supplement to traditional in-person care during this era of digital innovation. This service utilizes secure, two-way communication technology, sensors, and monitoring systems to support individuals in their homes without the physical presence of a caregiver. This is perfect for individuals who require more privacy and independence but still need that safety net.",
      "Our remote support system instantaneously connects clients to a remote staff that is available 24/7. From giving verbal cues to remind them to take their medicines to audio intercoms assisting a person to resolve a problem or just reassurance on a moment of anxiety through video calls, staff can intervene while empowering clients to solve their own problems with just that little guidance and building further self-reliance.",
      "Non-intrusive environmental sensors enhance safety. We can install technology for fall detection, unauthorized door openings, or smoke detection that indicates elopement risk; also, unusual inactivity is detected. If an alert is triggered, our remote team assesses the situation immediately. We can quickly dispatch emergency services or a roving caregiver if physical assistance is required, thereby ensuring a swift response to whatever crisis has occurred.",
      "Remote support is particularly effective for overnight monitoring. Instead of having a staff member sleep in the home, which can be intrusive, our remote team monitors the home electronically. This allows the individual to have the house to themselves, improving their sleep quality and sense of normalcy while ensuring that help is available at the push of a button if they wake up and need assistance.",
      "We carefully tailor the technology employed to meet each individual's comfort level and needs. From simple, intuitive interfaces for tablets to complex arrays of sensors, we make sure the client and their family members understand how to use the system. Telecare Services is on the front line in using technology to provide efficient, respectful, and empowering care."
    ]
  },
  {
    title: "Day Habilitation Services",
    img: "/service_9.jpg",
    desc: "We provide structured, meaningful day habilitation programs to aide in the advancement of participant independence and personal development. We provide services in both CSR Compliant and Non-CSR Compliant options to answer specific individual needs.",
    content_paragraphs: [
      "Our Day Habilitation Services are a lively and organized setting where clients can happily spend their weekdays doing meaningful things. More than simply a supervised setting, at Telecare Services, we offer a curriculum of growth for our clients. Our programs aim at improving socialization, physical health, and cognitive skills through a mix of group activities, educational workshops, and recreational fun.",
      "Each day at the center is unique, which keeps participants both excited and active. We provide creative arts and crafts, music therapy to work out emotions, and physical fitness adapted for participants with various levels of mobility. Activities that are typically enjoyable are now therapeutic tools to help improve fine motor skills, communication abilities, and overall physical wellness.",
      "A major focus of Day Habilitation is reinforcing the skills that lead to greater independence. We run sessions on practical life skills such as money management, computer literacy, and safety awareness. By practicing these skills in a supportive group setting, participants gain the confidence to apply them in the real world, whether at home or in the community.",
      "We realize every individual has different funding and regulatory needs, so we offer both CSR (Community Social Responsibility) Compliant and Non-CSR options. Our CSR-compliant tracks conform strictly to selected state and federal guidelines on community integration and ratios so that individuals receiving government waivers get just the amount of regulated care they need.",
      "Socially, the Day Habilitation program builds a sense of belonging. It is the place where friendships are forged and peer support is available. We celebrate holidays, cultural events, and personal milestones-all part of what makes it a community. Telecare Services is committed to making every day a good day: a day with purpose, laughter, and learning."
    ]
  }
]
const ServiceComp = ({ id }: { id: string }) => {

  const num = Number(id);
  
    const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
useEffect(() => {
const timer = setTimeout(() => setMounted(true), 0);
 if(typeof window!= undefined){
 setTheme(localStorage.getItem('theme')||'dark')
  }
return () => clearTimeout(timer);
}, []);

useEffect(() => {
  window.history.scrollRestoration = "manual";
}, []);
if (!mounted) return null;
  if (isNaN(num) || !services[num]) {
    return <div>Invalid service ID</div>;
  }

  const service = services[num];
  
  return (


    <div className="max-w-6xl mx-auto px-2 md:px-4 lg:px-6">
  
    <div className="flex flex-col md:flex-row gap-5 items-start">
      
    <div className="w-full md:w-1/2 relative h-[250px]">
  <Image
    src={service?.img}
    alt={service.title}
    fill
    className="object-cover shadow-md"
  />
</div>

      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-xl md:text-2xl font-bold 
         leading-tight mb-1">
        
    {service.title}
        </h1>

        <p className="
         text-md leading-relaxed">
         
    {service.desc}
        </p>
      </div>
    </div>

    {/* Content Sections */}
    <div className="mt-4 space-y-4">

    {service.content_paragraphs.map((res, index)=>{
        return  <p key={index} className="
       text-md leading-relaxed">
        {res}
    </p>
    })}

 <Link
            href="/contact"
            className={`inline-block mt-1 px-5 max-md:text-lg text-xl  py-2 font-semibold ${
              theme === 'dark'
                ? 'bg-zinc-100 text-zinc-900'
                : 'bg-zinc-900 text-zinc-100'
            }`}
          >
            Contact Us
          </Link>
    </div>
   
  </div>
  )
}

export default ServiceComp