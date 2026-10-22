import React from 'react'
import { PERSONAL_INFO, STATS } from '../../utilis/constant'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animation/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
import { FaStar } from "react-icons/fa6";

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
                  <div key={index} className='text-left border-r border-primary/40 pr-10 last:border-r-0'>
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


        

      </div>

      </div>

    </div>
  )
}

export default Hero
