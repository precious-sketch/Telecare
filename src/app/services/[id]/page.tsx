'use client';

import ServiceComp from '@/app/components/ServiceComp';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useState } from 'react';
 const services = [
  {
    "title": "Personal Support",
    "img": "/service_1.jpg",
    "desc": "Our personal support services are personalized according to the individual participant needs. We provide full assistance for fostering independence with an improved ability to perform activities of daily living.",
    "content_paragraphs": [
      "At Telecare Services LLC, we believe dignity starts with excellent personal care. Our Personal Support services are specifically designed to assist each client with the essential ADLs that may be difficult due to age, disability, or injury. We collaborate closely with our client and their family to establish an individualized care plan out of respect for personal preference. We ensure morning and evening routines are performed with privacy and respect.",
      "Our compassionate caregivers are specially trained in sensitive care for bathing, grooming, dressing, and toileting assistance. We realize how hard it is to admit when help is needed in these areas, which is why building trust with each client is paramount to our staff. By continuing to maintain the highest standards of hygiene and personal appearance, we enhance the self-esteem and confidence of those we serve, enabling them to take on their day with a positive attitude.",
      "Personal care goes beyond basic hygiene to include mobility and transfer safety in the home environment. Whether it is transferring a client from bed into a wheelchair, providing support with a walking aid, or just offering a steadying arm to avoid falls, our utmost concern is safety. A range of assessments of the home environment by our team helps to minimize risks to ensure our clients can get around their living spaces comfortably and securely.",
      "We also understand that personal support encompasses more than physical assistance alone; there is a strong element of companionship and emotional welfare involved. Our carers provide that friendly face and listening ear, helping to dispel feelings of isolation that so often come with limited mobility. By providing conversation, as well as support with light housekeeping or meal preparation, in addition to personal care, we provide a holistic approach to supporting a whole person.",
      "Lastly, our Personal Support services are highly flexible and adaptive. We realize that needs change over time, so we regularly review and adjust our care plans. Whether a client requires temporary assistance while recovering from surgery or long-term support for a chronic condition, Telecare Services, LLC enables people to maintain their independence in the comfort of their own homes for as long as possible."
    ]
  },
  {
    "title": "Supported Living",
    "img": "/service_2.jpg",
    "desc": "Our supported living services strive to provide a home environment where individuals can flourish and feel supported to live fulfilling lives within their communities.",
    "content_paragraphs": [
      "Supported Living at Telecare Services LLC is designed from a philosophy that all people, regardless of their support needs, have a right to a home. We provide a structured yet flexible environment where individuals with disabilities can live in their own homes or apartments rather than in institutional settings. This model encourages a sense of ownership and independence, affording our clients control over everyday decisions, from home décor to meal choices.",
      "Life-skills training is an important part of our Supported Living program. Our direct support professionals work side-by-side with the clients to teach the necessary skills for maintaining a self-sufficient home, including budgeting, cooking, cleaning, and laundry. We encourage autonomy in all aspects of maintaining their household by breaking tasks down into smaller steps that can be mastered. This educational approach builds a sense of accomplishment and prepares individuals for further independence when desired.",
      "While we believe in independence, safety forms the framework of our service. We offer different levels of supervision, from drop-in support to 24-hour availability, depending upon what the individual requires. Our staff is always ready to deal with emergencies, supervise medication, and advise in health and safety matters, thus reassuring families that their loved ones remain safe within their homes.",
      "Social integration is key to emotional health, and our Supported Living services actively foster community connection. We support our clients in maintaining relationships with neighbors, hosting friends, and participating in local activities. By living within the general community rather than in isolation, our clients build natural support networks and enjoy a sense of belonging that is very enriching to their lives.",
      "Ultimately, our goal is to help individuals design a life that reflects their unique personality and aspirations. We collaborate with case managers and families to set achievable personal goals, whether those include education, hobbies, or just simply maintaining a stable home life. Telecare Services LLC is dedicated to removing barriers to independence, proving with the right support, living on one's own is an achievable reality."
    ]
  },
  {
    "title": "Supportive Nursing",
    "img": "/service_3.jpg",
    "desc": "Our nursing support services are tailored to the individual needs of participants requiring special care and medical attention provided by qualified healthcare professionals.",
    "content_paragraphs": [
      "Telecare Services LLC combines daily living support with clinical healthcare through our unique Nursing Support services. We bring medical knowledge and support directly to the client via a staff of licensed RNs and LPNs. This is an important service when an individual's medical conditions are so complex that some level of clinical oversight is required to keep them safely in their community rather than in the hospital or nursing facility.",
      "Medication management is a critical aspect of our nursing care. Our nurses are responsible for seeing that all prescriptions are given at the right time and at the right dosage, in order to avoid adverse drug interactions or missed doses. They also handle refills and communicate directly with pharmacies and physicians on behalf of the family member, which eliminates much of the administrative burden from medical management.",
      "The caregiving team is able to provide special medical services that exceed basic caregiving. Some services include wound management, catheter care, tube feeding, and vital sign monitoring for chronic illnesses such as diabetes and hypertension. It is our pride to offer this level of care within your home to minimize the number of hospital visits and trips to the emergency room.",
      "Beyond direct care, our nurses serve as important liaisons between the client and their wider healthcare network. We arrange appointments with specialists and interpret the medical instructions for the client and their support staff; we advocate for the client's health needs during medical consultations. The result is continuity of care wherein all facets of the client's health are aligned and well managed.",
      "Education is also a strong pillar of our Nursing Support. We educate the clients, family members, and other support staff on recognizing signs of illness and teaching how to manage certain conditions. By preparing the support network with medical knowledge, we make the environment around our client even safer. Telecare Services LLC is committed to delivering clinical excellence with a compassionate touch."
    ]
  },
  {
    "title": "Community Development (CDS)",
    "img": "/service_4.jpg",
    "desc": "CDS is concerned with promoting community involvement, social inclusion, and active participation in diverse community contexts.",
    "content_paragraphs": [
      "Community Development Services at Telecare Services, LLC are designed to break down the walls of isolation that many individuals with disabilities face. We believe that a full life includes active participation in the world outside one's front door. Our CDS program facilitates access to community resources, recreational centers, libraries, and public events, making sure our clients are visible and valued members of the community.",
      "This service focuses heavily on social skills and relationship building. Our support staff accompanies clients to social gatherings, clubs, and religious services, helping them navigate social nuances and build lasting friendships. We work toward assisting the individual in developing a 'natural support system'—friends and acquaintances who are not paid caregivers—which is integral to providing stability for long-term emotional well-being and true inclusion.",
      "Volunteering and civic engagement are huge parts of our CDS program, too. We assist in finding volunteer opportunities that match a client's interest and abilities, whether it would be at a local animal shelter, food bank, or community garden. Giving back to the community gives our clients such a profound sense of purpose, lifts up feelings of self-worth, and proves to the general public just what they can do.",
      "We also address the logistical challenges of community integration, like transportation training. Our staff teaches clients how to use public transit, read schedules, and navigate routes safely. Learning to get around town independently opens a world of possibilities to clients, allowing them to access entertainment, shopping, and services without being wholly dependent on others for a ride.",
      "At Telecare Services, LLC, we tailor each CDS plan to include things the individual particularly enjoys. If a client loves art, we find local pottery classes; if they love sports, we look for local leagues or spectator events. By focusing on what brings the individual joy, we take the concept of community integration and turn it into a fun, enriching reality that enhances their quality of life."
    ]
  },
  {
    "title": "Respite Care",
    "img": "/service_5.jpg",
    "desc": "We offer temporary relief to caregivers in the form of respite care services. These services afford short-term relief and allow caregivers to recharge while the participant receives continual care.",
    "content_paragraphs": [
      "Caring for a loved one with a disability or age-related needs is a rewarding but demanding labor of love. At Telecare Services LLC, our Respite Care program is tailored to support the 'silent heroes'-the primary caregivers-through temporary, short-term relief that enables them to take a vacation, attend to their own medical needs, or simply rest and recharge, knowing their loved one is safe.",
      "We offer flexible scheduling options to meet the diverse needs of families. Whether you need support for a few hours to run errands, overnight care for a weekend getaway, or a longer period of support during a family emergency, our team is ready to step in. This flexibility helps prevent caregiver burnout, which is crucial for maintaining a healthy long-term caregiving relationship at home.",
      "The respite period is designed to minimize disruption in the participant's routine. We take the time, prior to the primary caregiver's departure, to learn the individual's habits, preferences, dietary needs, and medication schedules. Such advance preparation allows a very smooth transition of care wherein the participant feels comfortable, secure, and well-cared-for, reducing any anxiety about their family member being away.",
      "Respite care is not just 'babysitting'; it is an engaging experience for the participant. Our staff comes prepared with activities, games, and conversation to ensure the time spent away from the primary caregiver is enjoyable. We view respite as a mini-vacation for the client as well, offering them a change of pace and the opportunity to interact with new people in a supportive environment.",
      "Ultimately, Respite Care strengthens the family unit. When caregivers can step away and focus on their personal well-being, then they can move back into their caregiving role with renewed energy and patience. Telecare Services LLC is proud to provide this safety net, knowing that the caregiver and care recipient will stay healthy, happy, and supported."
    ]
  },
  {
    "title": "Employment Services",
    "img": "/service_6.jpg",
    "desc": "At Telecare Services, we are committed to empowering individuals with disabilities through a comprehensive approach to employment. We focus on helping each individual find meaningful and long-term employment that best utilizes their skills and aspirations.",
    "content_paragraphs": [
      "We believe that employment is a prime driver of independence and self-worth. Telecare Services LLC provides specialized Employment Services to support individuals with disabilities in their pursuit of job market success. Our process starts with a thorough discovery phase, during which time we assess the individual's skills, interests, and strengths to identify career paths that offer genuine satisfaction and sustainability.",
      "Once a job-oriented objective has been established, we take the active approach of offering hands-on assistance with the job search process; this includes resume writing workshops, preparation for interviews, and how to go about making an application. We realize the hiring process can be intimidating, so we conduct mock interviews to teach soft skills such as punctuality, communication, and workplace etiquette so our clients can give a good first impression.",
      "Our support does not end when an individual receives a job offer. We also provide on-site job coaching and support during the initial phase of employment to assist the individual to learn their new job duties and also adapt to the culture of the workplace. We work alongside clients to master the occupation, fading support as the individual becomes confident and competent, thus ensuring they become a fully integrated and productive member of the team.",
      "Advocacy plays a major role in our Employment Services. We work with employers to identify and implement reasonable accommodations that enable our clients to perform their jobs effectively. By educating employers about the benefits of an inclusive workforce, we help create supportive work environments that value individuals with disabilities for their talents and contributions rather than their limitations.",
      "Long-term job retention is our ultimate metric of success. We keep in constant contact with both the employee and the employer to work out challenges and provide retraining or mediation as needed. Telecare Services LLC is committed to making jobs into careers for our clients, with the financial independence and social connections that valuable work provides."
    ]
  },
  {
    "title": "Adult Residential Services",
    "img": "/service_7.jpg",
    "desc": "At Telecare Services, we believe that adults with special needs require a caring and nurturing environment. Our Adult Residential Services have become a comforting and supportive home for a number of people - a place where they can grow and thrive.",
    "content_paragraphs": [
      "Our Adult Residential Services provide a warm, family-like atmosphere for individuals who need 24-hour support, but would prefer to live in the community rather than an institution. The group homes managed by Telecare Services LLC are safe, accessible, and comfortably furnished. We work hard at providing a genuine 'home' for residents to experience belongingness, safety, and companionship among their housemates.",
      "The staffing in our residential homes is comprehensive and attentive. We provide round-the-clock supervision to assist with every aspect of daily life, including meal preparation and housekeeping, personal hygiene, and medication administration. Our staff are trained in both behavioral challenges and medical needs so that residents are kept safe at all times while still maintaining their privacy and dignity.",
      "Community is built around the dining table and the living room. We also encourage communal living dynamics where the residents share meals, celebrate their birthdays, and enjoy leisure time together. It is important, for this reason, for combating loneliness and helping a resident build social skills. However, we also respect the need for individual time, ensuring each resident has their own personalized space to retreat to.",
      "Each resident in our care has an Individualized Support Plan that outlines how we will provide services for that individual. We work with the individual to establish personal goals, such as learning to do laundry, developing better communication skills, or managing personal finances. Our residential staff actively works on those goals each day, making the residence a place of ongoing learning and growth.",
      "We maintain an open-door policy for families and encourage their active involvement in the lives of our residents. We also facilitate visits, home trips, and regular communication to keep family bonds intact. It is our commitment at Telecare Services LLC that we turn the residential homes into a place of joy, dignity, and comfort, allowing adults with special needs to live life to the fullest."
    ]
  },
  {
    "title": "Remote Support Services",
    "img": "/service_8.jpg",
    "desc": "Our Remote Support Services allow individuals to stay independent but offer real-time support when it is needed. With the help of advanced technology and proficient support, we provide:",
    "content_paragraphs": [
      "Telecare Services LLC provides Remote Support Services as a modern alternative or supplement to traditional in-person care during this era of digital innovation. This service utilizes secure, two-way communication technology, sensors, and monitoring systems to support individuals in their homes without the physical presence of a caregiver. This is perfect for individuals who require more privacy and independence but still need that safety net.",
      "Our remote support system instantaneously connects clients to a remote staff that is available 24/7. From giving verbal cues to remind them to take their medicines to audio intercoms assisting a person to resolve a problem or just reassurance on a moment of anxiety through video calls, staff can intervene while empowering clients to solve their own problems with just that little guidance and building further self-reliance.",
      "Non-intrusive environmental sensors enhance safety. We can install technology for fall detection, unauthorized door openings, or smoke detection that indicates elopement risk; also, unusual inactivity is detected. If an alert is triggered, our remote team assesses the situation immediately. We can quickly dispatch emergency services or a roving caregiver if physical assistance is required, thereby ensuring a swift response to whatever crisis has occurred.",
      "Remote support is particularly effective for overnight monitoring. Instead of having a staff member sleep in the home, which can be intrusive, our remote team monitors the home electronically. This allows the individual to have the house to themselves, improving their sleep quality and sense of normalcy while ensuring that help is available at the push of a button if they wake up and need assistance.",
      "We carefully tailor the technology employed to meet each individual's comfort level and needs. From simple, intuitive interfaces for tablets to complex arrays of sensors, we make sure the client and their family members understand how to use the system. Telecare Services LLC is on the front line in using technology to provide efficient, respectful, and empowering care."
    ]
  },
  {
    "title": "Day Habilitation Services",
    "img": "/service_9.jpg",
    "desc": "We provide structured, meaningful day habilitation programs to aide in the advancement of participant independence and personal development. We provide services in both CSR Compliant and Non-CSR Compliant options to answer specific individual needs.",
    "content_paragraphs": [
      "Our Day Habilitation Services are a lively and organized setting where clients can happily spend their weekdays doing meaningful things. More than simply a supervised setting, at Telecare Services LLC, we offer a curriculum of growth for our clients. Our programs aim at improving socialization, physical health, and cognitive skills through a mix of group activities, educational workshops, and recreational fun.",
      "Each day at the center is unique, which keeps participants both excited and active. We provide creative arts and crafts, music therapy to work out emotions, and physical fitness adapted for participants with various levels of mobility. Activities that are typically enjoyable are now therapeutic tools to help improve fine motor skills, communication abilities, and overall physical wellness.",
      "A major focus of Day Habilitation is reinforcing the skills that lead to greater independence. We run sessions on practical life skills such as money management, computer literacy, and safety awareness. By practicing these skills in a supportive group setting, participants gain the confidence to apply them in the real world, whether at home or in the community.",
      "We realize every individual has different funding and regulatory needs, so we offer both CSR (Community Social Responsibility) Compliant and Non-CSR options. Our CSR-compliant tracks conform strictly to selected state and federal guidelines on community integration and ratios so that individuals receiving government waivers get just the amount of regulated care they need.",
      "Socially, the Day Habilitation program builds a sense of belonging. It is the place where friendships are forged and peer support is available. We celebrate holidays, cultural events, and personal milestones-all part of what makes it a community. Telecare Services LLC is committed to making every day a good day: a day with purpose, laughter, and learning."
    ]
  }
]
interface PostProps {
  params: { id: string };
}

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const unwrapped = React.use(params);
  const { id } = unwrapped;

  const { theme } = useTheme();
  
  return (
 <section className= {`w-full py-20 text-justify ${theme==='dark'?'bg-black text-white':'bg-gray-100 text-black'}`}>
  <ServiceComp id={id}/>
</section>
  );
};

export default Page;
