import React from 'react'
import { FiArrowUpRight, FiFolder } from 'react-icons/fi'
import FadeIn from '../animation/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'

const contributions = [
  {
    id: 1,
    name: 'Health Identity',
    role: 'Full-Stack Contributor',
    description:
      'Contributed to the product experience by helping build a real-time health identity platform, focusing on scalable architecture, responsive UI, and collaborative development.',
    stack: ['PERN', 'Real-time UI', 'Collaboration', 'Product Experience'],
    accent: 'from-primary/80 via-amber-500/40 to-transparent',
    link: 'https://healthidentitydirectory.com/',
  },
  {
    id: 2,
    name: 'Kolekto',
    role: 'Frontend Contributor',
    description:
      'Helped build a modern Fintech platform with a focus and helping users collect group payments seamlessly.',
    stack: ['React', 'Tailwind', 'API', 'Dashboard UI'],
    accent: 'from-green-500/80 via-cyan-400/30 to-transparent',
    link: 'https://www.kolekto.com.ng/.netlify.app/',
  },
  {
    id: 3,
    name: 'X-Cart',
    role: 'Full-Stack , Chief Technical Officer',
    description:
      'Supported internal product work by improving interface flows, refining usability, and turning collaborative ideas into cleaner customer-facing experiences. Worked on the backend infrastructure and frontend development to build a scalable architecture and a responsive UI that enhanced the overall user experience.',
    stack: ['UX', 'Frontend', 'Product Thinking', 'UI Design', 'Collaboration', 'Product Experience', 'Backend'],
    accent: 'from-purple-700/80 via-purple-500/40 to-transparent',
    link: '#',
  },
  {
    id: 4,
    name: 'Stock Tracker',
    role: 'Full-Stack',
    description:
      'Worked on a stock tracking application that allows users to monitor and analyze stock market trends in real-time. Contributed to both the frontend and backend development, ensuring a seamless user experience and efficient data handling.',
    stack: ['UX', 'Frontend', 'Product Thinking', 'UI Design', 'Collaboration', 'Product Experience', 'Backend'],
    accent: 'from-purple-700/80 via-purple-500/40 to-transparent',
    link: '#',
  },
]

const Contributions = () => {
  return (
    <section id='contributions' className='relative py-20 bg-black overflow-hidden'>
      <RadialGradientBackground variant='about' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <FadeIn delay={80}>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6'>
              <FiFolder className='w-4 h-4 text-primary' />
              <span className='text-sm font-medium text-primary'>Product Contributions</span>
            </div>

            <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>Products I Helped Build</h2>
            <p className='text-lg text-white/60 max-w-2xl mx-auto'>
              A look at real products and experiences where I contributed to the build, UI, and product direction.
            </p>
          </div>
        </FadeIn>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {contributions.map((item, index) => (
            <FadeIn key={item.id} delay={index * 120}>
              <article className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(204,127,2,0.12)]'>
                <div className={`absolute inset-x-0 top-0 h-20 bg-linear-to-r ${item.accent}`} />

                <div className='relative'>
                  <div className='flex items-center justify-between mb-8'>
                    <span className='px-3 py-1 rounded-full border border-white/10 bg-black/25 text-[10px] uppercase tracking-[0.2em] text-white/70'>
                      {item.role}
                    </span>
                  </div>

                  <h3 className='text-2xl font-semibold text-white mb-3'>{item.name}</h3>
                  <p className='text-sm leading-relaxed text-white/65 mb-5'>{item.description}</p>

                  <div className='flex flex-wrap gap-2 mb-6'>
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className='px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-[11px] text-primary/90'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {item.link !== '#' ? (
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-amber-300 transition-colors'
                    >
                      View Product <FiArrowUpRight className='w-4 h-4' />
                    </a>
                  ) : (
                    <span className='inline-flex items-center gap-2 text-sm font-medium text-white/45'>
                      Private Product
                    </span>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contributions
