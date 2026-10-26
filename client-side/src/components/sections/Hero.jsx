import React from 'react'
import { PERSONAL_INFO, STATS } from '../../utilis/constant'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animation/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
import { FaStar, FaGolang, FaArrowDown } from "react-icons/fa6";
import { SiReact, SiPostgresql, SiMongodb, SiPython } from "react-icons/si";
import { RiNextjsFill , RiNodejsLine, RiTailwindCssFill  } from "react-icons/ri";
import Profile from '../../assets/skills/profile.png'

const Hero = () => {
  return (
    <div className='relative min-h-screen flex items-center overflow-hidden bg-black '>
      <RadialGradientBackground variant='hero' />

      {/* Content Container */}

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full'>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

          {/* Left */}

          <div className='text-left'>

            <FadeIn delay={0}>

            <div className='inline-flex items-center gap-2.5 px-2.5 py-3 mb-8 bg-linear-to-r from-primary/10 via-primary/30 to-primary border border-primary/20 rounded-full'>
              <FaStar  className='w-4 h-4 fill-amber-200'/>
              <span className='text-xs md:text-sm text-white tracking-[1.2px]'>
                {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
              </span>
            </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tighter'> Software Dev | Engineer Portfolio</h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className='text-lg text-white/70 max-w-138 mb-8'> Building, Engineering and Constructing Scalable Applications with React, Node, Javascript and cutting-edge technologies. Transformig and Translating ideas into exceptional digital exprience  </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button onClick={() => scrollToSection ('contact')} className='inline-flex items-center gap-0 mb-12 group'>

                <span className='relative z-10 bg-white text-[#212121] rounded-[17px] px-7 py-4 text-base font-medium border-white'>Get In touch </span>
              </button>
            </FadeIn>

            <FadeIn delay={400}> 
              <div className='grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full'>
                {STATS.map((stat, index) => (
                  <div key={index} className='text-left border-r border-primary/40 pr-10 last:border-r-0 '>
                   <div className='text-2xl font-medium text-primary mb-2 font-mono '>
                    {stat.value}
                   </div>
                   <p className='text-sm text-white leading-snug'>
                    {stat.label}
                   </p>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>

             {/* Right */}
      
      <FadeIn delay={200}>
        <div className='relative'>
          <div className='relative overflow-hidden rounded-2xl aspect-4/5 max-w-125 ml-auto group'>
            <div className='absolute inset-0 rounded-2xl overflow-hidden'>
              <div className='absolute inset-0.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl'></div>
            </div>

             {/* Image */}

             <div className='relative rounded-2xl overflow-hidden m-px h-[calc(100%-2px)]'>
              <img src={Profile} alt="developer at work" className='w-full h-full object-cover'/>
             </div>

              {/* Technologies Logo */}
              <div className='absolute bottom-6 left-6 z-20'>
                <FadeIn delay={500}>
                 <div className='flex items-center justify-center gap-2 sm:gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-6 py-3 max-w-full'>
                  <div className='w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center transition-transform duration-200'>
                      <SiReact className='w-full h-full text-primary'/>
                    </div>

                   <div className='w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center transition-transform duration-200'>
                      <RiNextjsFill className='w-full h-full text-primary'/>
                    </div>


                   <div className='w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center transition-transform duration-200'>
                      <RiNodejsLine className='w-full h-full text-primary'/>
                    </div>


                    <div className='w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center transition-transform duration-200'>
                      <RiTailwindCssFill className='w-full h-full text-primary'/>
                    </div>


                    <div className='w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center transition-transform duration-200'>
                     <SiPostgresql className='w-full h-full text-primary'/>
                    </div>


                    <div className='w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center transition-transform duration-200'>
                    <SiMongodb className='w-full h-full text-primary'/>
                    </div>


                    <div className='w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center transition-transform duration-200'>
                     <SiPython className = 'w-full h-full text-primary'/>
                    </div>


                    <div className='w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center transition-transform duration-200'>
                     <FaGolang className = 'w-full h-full text-primary'/>
                    </div>
                    

                  </div>

                </FadeIn>
              </div>


          </div>
        </div>
      </FadeIn>

      </div>

      
      </div>

      <button onClick={() => scrollToSection('about')} className='absolute bottom-3 left-1/2 -translate-x-1/2 animate-bounce'>
        <FaArrowDown className='w-8 h-8 text-primary'/>
      </button>

    </div>
  )
}

export default Hero
