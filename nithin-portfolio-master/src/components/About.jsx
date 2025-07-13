import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            
    <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Abhishek Kumar, a 2025 "Computer Science Engineering graduate" (expected Aug 2025) with hands-on experience in "Java, Spring Boot, and web technologies". I'm passionate about crafting robust backend systems and innovative software solutions.
      <br />
      <br />As a "Software Engineer Intern" at ZPS Technologies, I've designed, developed, and deployed a "Contact Managing Application" using "Spring Boot, REST APIs, and MySQL".
      I improved system performance by 20% through optimized backend services and integrated "Spring Security" for robust user authentication and authorization . 
      My technical skills include "Java, C, HTML, CSS, REST APIs, JSP, Servlets, Azure, MySQL, Spring Boot, and JavaScript.
      <br />
      <br />Beyond coding, I'm eager to apply my strong problem-solving and communication skills to develop innovative software solutions in a dynamic environment. I'm also a "Runner-Up in CODA-A-THON 2.0" and hold a "5-Star rating in Problem Solving on HackerRank".
    </p>

            <ButtonLink
              url='https://drive.google.com/file/d/18PjswfaY5W8HYyAwgdMc7yu9z28VAR8Y/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;