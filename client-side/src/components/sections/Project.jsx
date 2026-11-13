import React, { useMemo, useState } from 'react'
import { FiArrowUpRight, FiGithub, FiFolder } from 'react-icons/fi'
import FadeIn from '../animation/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'

const projects = [
  {
    id: 1,
    title: 'Callive',
    category: 'Web App',
    status: 'Live',
    year: '2026',
    description:
      'A video conferencing web app designed for remote collaboration, secure calls, and easy access across devices.',
    stack: ['PERN', 'WebRTC', 'PostgreSQL', 'Tailwind'],
    accent: 'from-primary/80 via-amber-500/40 to-transparent',
    liveUrl: 'https://callive.tech',
    githubUrl: 'https://github.com/ReelMei/Cally',
  },
  {
    id: 2,
    title: 'EnzoStay',
    category: 'Frontend App',
    status: 'Live',
    year: '2025',
    description:
      'A modern real estate listing app for browsing properties and connecting with agents., allows you reserve and book properties for your stay.',
    stack: ['React', 'Tailwind', 'CLERK', 'API'],
    accent: 'from-blue-700 via-blue-500/40 to-transparent',
    liveUrl: 'https://enzo-stay.netlify.app/',
    githubUrl: 'https://github.com/ReelMei/Enzo-estate',
  },
  {
    id: 3,
    title: 'LiveGrocery',
    category: 'Web App',
    status: 'Soon Live',
    year: '2026',
    description:
      'A video conferencing web app designed for remote collaboration, secure calls, and easy access across devices.',
    stack: ['PERN', 'WebRTC', 'PostgreSQL', 'Tailwind'],
    accent: 'from-olive-500/80 via-olive-500/40 to-transparent',
    // liveUrl: 'https://callive.tech',
    githubUrl: 'https://github.com/ReelMei/LIve-grocery',
  },
  {
    id: 4,
    title: 'Salesbook',
    category: 'Web App',
    status: 'Live',
    year: '2026',
    description:
      'A sales management app for tracking deals and managing customer relationships.',
    stack: ['React', 'Local Storage', 'API', 'Tailwind'],
    accent: 'from-purple-700/80 via-purple-500/40 to-transparent',
    liveUrl: 'https://salesbook-b.vercel.app/',
    githubUrl: 'https://github.com/ReelMei/Salesbook',
  },
  {
    id: 5,
    title: 'EnzoCrypto',
    category: 'Frontend',
    status: 'Live',
    year: '2025',
    description:
      'A frontend crypto dashboard for tracking live coin prices, market trends, and price movement in a clean dashboard layout.',
    stack: ['React', 'Tailwind CSS', 'API', 'Charts'],
    accent: 'from-sky-500/80 via-cyan-400/30 to-transparent',
    liveUrl: 'https://enzocrypto.netlify.app/',
    githubUrl: 'https://github.com/ReelMei/Enzo-crypto',
  },
  {
    id: 6,
    title: 'EnzoEstate',
    category: 'Frontend',
    status: 'Live',
    year: '2025',
    description:
      'A frontend real estate dashboard for tracking properties, market trends, and price movement in a clean dashboard layout.',
    stack: ['React', 'Tailwind CSS', 'API', 'Charts'],
    accent: 'from-sky-500/80 via-cyan-400/30 to-transparent',
    liveUrl: 'https://enzoestate.netlify.app/',
    githubUrl: 'https://github.com/ReelMei/Enzo-crypto',
  },
   {
    id: 7,
    title: 'EnzoCity',
    category: 'Frontend',
    status: 'Live',
    year: '2025',
    description:
      'A Frontend Showcasing the landing page of a school project, EnzoCity, which is a web application that allows users to explore and discover various features of a University.',
    stack: ['React', 'Tailwind CSS'],
    accent: 'from-sky-500/80 via-cyan-400/30 to-transparent',
    liveUrl: 'https://enzocity.netlify.app/',
    githubUrl: 'https://github.com/ReelMei/Team-colab',
  },
  {
    id: 8,
    title: 'EnzoClone',
    category: 'Frontend',
    status: 'Live',
    year: '2025',
    description:
      'A Frontend app cloning Spotify .',
    stack: ['React', 'Tailwind CSS'],
    accent: 'from-green-500/80 via-cyan-400/30 to-transparent',
    liveUrl: 'https://enzoclone.netlify.app/',
    // githubUrl: '#',
  },
  {
    id: 9,
    title: 'Callive',
    category: 'Backend',
    status: 'Live',
    year: '2025',
    description:
      'The backend for the Callive application.',
    stack: ['Node.js', 'Express.js', 'CLERK', 'POSTGRESQL'],
    accent: 'from-green-500/80 via-cyan-400/30 to-transparent',
    liveUrl: 'https://callive-backend.onrender.com',
    githubUrl: 'https://github.com/ReelMei/Cally/tree/main/server'
  },
]

const categories = ['All', 'Web App', 'Frontend', 'Backend']

const Project = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <section id='projects' className='relative py-20 bg-black overflow-hidden'>
      <RadialGradientBackground variant='about' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <FadeIn delay={80}>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6'>
              <FiFolder className='w-4 h-4 text-primary' />
              <span className='text-sm font-medium text-primary'>Selected Work</span>
            </div>

            <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>Featured Projects</h2>
            <p className='text-lg text-white/60 max-w-2xl mx-auto'>
              A look at the products, experiences, and systems I have built to solve real problems with clean execution.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={140}>
          <div className='flex flex-wrap items-center justify-center gap-3 mb-14'>
            {categories.map((category) => (
              <button
                key={category}
                type='button'
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-black border-primary shadow-[0_0_20px_rgba(204,127,2,0.45)]'
                    : 'border-white/10 bg-white/5 text-white/70 hover:border-primary/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100}>
              <article className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(204,127,2,0.15)]'>
                <div className={`absolute inset-x-0 top-0 h-28 bg-linear-to-r ${project.accent}`} />
                <div className='absolute inset-0 bg-linear-to-b from-white/0 via-black/10 to-black/90' />

                <div className='relative p-6'>
                  <div className='flex items-center justify-between mb-16'>
                    <span className='px-3 py-1 rounded-full border border-white/10 bg-black/25 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80'>
                      {project.category}
                    </span>

                    <span className='text-xs text-primary font-medium'>{project.status}</span>
                  </div>

                  <div className='space-y-4'>
                    <div>
                      {/* <p className='text-xs uppercase tracking-[0.2em] text-white/45 mb-2'>Project {project.year}</p> */}
                      <h3 className='text-2xl font-semibold text-white mt-3'>{project.title}</h3>
                    </div>

                    <p className='text-sm leading-relaxed text-white/65'>{project.description}</p>

                    <div className='flex flex-wrap gap-2'>
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className='px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-[11px] text-primary/90'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='mt-8 flex items-center justify-between pt-5 border-t border-white/10'>
                    <span className='text-sm text-white/50'>Live Demo</span>

                    <div className='flex items-center gap-3'>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-primary/40 hover:text-primary'
                        aria-label={`View live project for ${project.title}`}
                      >
                        <FiArrowUpRight className='w-4 h-4' />
                      </a>

                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-primary/40 hover:text-primary'
                        aria-label={`View GitHub for ${project.title}`}
                      >
                        <FiGithub className='w-4 h-4' />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
