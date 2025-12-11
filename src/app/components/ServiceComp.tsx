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
      "One of the main factors influencing independence and self-worth is employment.  To help people with disabilities succeed in the job market, Telecare Services offers specialised employment services.  Our process begins with a comprehensive discovery phase in which we evaluate the person's abilities, interests, and strengths in order to determine career paths that provide true fulfilment and sustainability.", "After a job-oriented objective has been established, we take the active approach of providing hands-on assistance with the job search process; this includes resume writing workshops, interview preparation, and how to make an application.  We conduct interviews to teach soft skills like punctuality, communication, and workplace etiquette so our clients can make a good first impression because we understand that the hiring process can be intimidating.",
   "Our assistance doesn't stop when someone gets a job offer.  In order to help the person learn their new job responsibilities and adjust to the workplace culture, we also offer on-site job coaching and support during the first phase of employment.  In order to ensure that our clients become fully integrated and productive members of the team, we work alongside them to master the profession, providing fading support as they gain competence and confidence.",
   "A significant part of our employment services is advocacy.  In order to help our clients do their jobs well, we collaborate with employers to find and implement reasonable accommodations.  By teaching employers about the advantages of having an inclusive workforce, we contribute to the development of welcoming workplaces where people with disabilities are valued for their abilities and contributions rather than their limitations.",
       "Our ultimate success metric is long-term job retention.  To resolve issues and offer retraining or mediation when necessary, we maintain continuous communication with both the employer and the employee.  With the financial independence and social connections that meaningful work offers, Telecare Services is dedicated to helping our clients turn their jobs into careers."
    ]
  },
  {
    title: "Adult Residential Services",
    img: "/service_7.jpg",
    desc: "Adults with special needs need a loving and supportive environment, in our opinion at Telecare Services.  For many, our Adult Residential Services have evolved into a cosy and encouraging home where they can develop and flourish.",
    content_paragraphs: [
      "For people who require round-the-clock assistance but would rather live in the community than an institution, our Adult Residential Services offer a cosy, family-like environment.  Telecare Services oversees group homes that are secure, easily accessible, and cosy.  We put a lot of effort into giving residents a true home where they can feel safe, connected to one another, and at home.",
 "We have thorough and attentive staffing in our residential homes.  We offer 24-hour supervision to help with all facets of daily life, such as medication administration, personal hygiene, meal preparation, and housekeeping.  In order to keep residents safe at all times while preserving their privacy and dignity, our staff is trained in both medical needs and behavioural challenges.",
      "Additionally, we promote communal living arrangements where residents eat meals together, celebrate birthdays, and spend free time together.  This makes it crucial for preventing loneliness and assisting a resident in developing social skills.  But we also value the need for personal time, so we make sure every resident has a private area to retreat to.",
       "Every resident under our care has an Individualised Support Plan that describes the services we will offer to them.  We collaborate with the person to set personal objectives, like learning how to do laundry, improving communication, or handling personal finances.  The residence is a place of continuous learning and development because our residential staff actively works towards those objectives every day.",
      "Families are welcome and encouraged to actively participate in our residents' lives.  In order to maintain family ties, we also arrange visits, house trips, and frequent communication.  At Telecare Services, we are dedicated to making residential homes joyful, dignified, and comfortable so that adults with special needs can fully experience life."
    ]
  },
  {
    "title": "Organised Healthcare Delivery System",
    "img": "/services_12.jpg",
    "desc": "Telecare Services specializes in providing an Organized Healthcare Delivery System tailored for individuals with special needs. Our system is meticulously designed to offer comprehensive and structured support, focusing on the unique requirements of each participant.",
    "content_paragraphs": [
      "Through a combination of assistive technology, environmental assessments, modifications, and caregiver supports, we ensure a holistic approach to care. From short-term respite options to transportation services and specialized camps, our system is crafted to enhance accessibility, safety, and quality of life for individuals with diverse abilities.",
      "The staffing in our residential homes is comprehensive and attentive. We provide round-the-clock supervision to assist with every aspect of daily life, including meal preparation and housekeeping, personal hygiene, and medication administration. Our staff are trained in both behavioral challenges and medical needs so that residents are kept safe at all times while still maintaining their privacy and dignity.",
      "At Telecare Services, we are committed to organizing healthcare delivery in a way that promotes independence, inclusivity, and continuous improvement for those we serve. This include Assistive Technology & Services, Environmental Assessment, Environmental Modifications, Live-in Caregiver Supports, Respite 15 Minutes (Hourly), Respite Daily (CLGH Sites Only), Respite Camp, Transition Services, Transportation Services, Vehicle Modifications",
      // "Each resident in our care has an Individualized Support Plan that outlines how we will provide services for that individual. We work with the individual to establish personal goals, such as learning to do laundry, developing better communication skills, or managing personal finances. Our residential staff actively works on those goals each day, making the residence a place of ongoing learning and growth.",
      // "We maintain an open-door policy for families and encourage their active involvement in the lives of our residents. We also facilitate visits, home trips, and regular communication to keep family bonds intact. It is our commitment at Telecare Services LLC that we turn the residential homes into a place of joy, dignity, and comfort, allowing adults with special needs to live life to the fullest."
    ]
  },
  {
    title: "Remote Support Services",
    img: "/service_8.jpg",
    desc: "Our Remote Support Services allow individuals to stay independent but offer real-time support when it is needed. With the help of advanced technology and proficient support, we provide the best remote support services",
    content_paragraphs: [
      "In this age of digital innovation, remote support services are a contemporary addition to traditional in-person care.  This service supports people in their homes without a carer physically present by using sensors, monitoring systems, and secure, two-way communication technology.  For those who need that safety net but also want more privacy and independence, this is ideal. Our remote support system instantly connects clients to a remote staff that is available 24/7.", "Staff can intervene while empowering clients to solve their own problems with just that little guidance and building further self-reliance, whether it's through verbal cues to remind them to take their medications or audio intercoms to help someone solve a problem or just reassure them during a moment of anxiety through video calls.",
      "Safety is improved by non-intrusive environmental sensors.  If physical assistance is needed, we can promptly send out emergency services or a roving carer, guaranteeing a prompt response to whatever crisis has arisen.",
       "Remote assistance works especially well for monitoring during the night.  Our remote team electronically monitors the house rather than having a staff member sleep there, which can be invasive.  This makes it possible for the person to have the house to themselves, which enhances their quality of sleep and sense of normalcy while guaranteeing that assistance is at their fingertips in case they wake up and require it.",
      "We carefully customise the technology used to suit the needs and comfort level of each individual.  We ensure that the client and their family members are able to operate the system, from straightforward tablet interfaces to intricate sensor arrays.  Telecare Services is at the forefront of leveraging technology to deliver effective, considerate, and empowering care."
    ]
  },
  {
    title: "Day Habilitation Services",
    img: "/service_9.jpg",
    desc: "To support the growth of participant independence and personal development, we offer organised, purposeful day habilitation programs.  To address particular individual needs, we offer services in both CSR-compliant and non-CSR-compliant options.",
    content_paragraphs: [
      "Clients can enjoyably spend their weekdays doing worthwhile activities in our vibrant and well-organised day habilitation services.  At Telecare Services, we provide our clients with a curriculum of growth rather than just a supervised environment.  Our programs use a combination of educational workshops, recreational fun, and group activities to improve socialisation, physical health, and cognitive abilities.",
       "Every day at the centre is different, which keeps people engaged and enthusiastic.  We offer physical fitness programs tailored to individuals with different mobility levels, music therapy to address emotions, and creative arts and crafts.  Nowadays, enjoyable activities can be used as therapeutic tools to enhance communication skills, fine motor skills, and general physical wellness.",
      "Day Habilitation places a lot of emphasis on strengthening the abilities that result in increased independence.  We conduct workshops on useful life skills like computer literacy, money management, and safety awareness.  We provide both CSR (Community Social Responsibility) Compliant and Non-CSR options because we understand that each person has different funding and regulatory needs.", "Participants gain the confidence to apply these skills in the real world, whether at home or in the community, by practicing them in a supportive group setting.  In order to ensure that people receiving government waivers receive precisely the right amount of regulated care, our CSR-compliant tracks closely adhere to specific state and federal guidelines on community integration and ratios.",
      "The Day Habilitation program fosters a feeling of social inclusion.  Peer support is available and friendships are formed there.  We commemorate holidays, cultural occasions, and individual achievements—all of which contribute to our sense of community.  Telecare Services is dedicated to making each day enjoyable—a day filled with learning, laughter, and purpose."
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
         text-md">
         
    {service.desc}
        </p>
      </div>
    </div>

    {/* Content Sections */}
    <div className="mt-4 space-y-3">

    {service.content_paragraphs.map((res, index)=>{
        return  <p key={index} className="
       text-md">
        {res}
    </p>
    })}

 <Link
            href="/contact"
            className={`inline-block cursor-target mt-1 px-5 max-md:text-lg text-xl  py-2 font-semibold ${
        theme === 'dark' ? 'bg-[#efe1cd] text-[#71583c]' : 'bg-[#71583c] text-white'
      }`}
          >
            Contact Us
          </Link>
    </div>
   
  </div>
  )
}

export default ServiceComp