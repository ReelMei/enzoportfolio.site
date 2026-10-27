import React from 'react'
import { IoSparkles } from "react-icons/io5";
import { FaCode, FaDownload, FaGolang } from 'react-icons/fa6'
import { SiDjango, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
import FadeIn from '../animation/FadeIn'
import { ABOUT_STATS, PERSONAL_INFO } from '../../utilis/constant';

const About = () => {

  //Skills
  const skills = [
    {name: 'React.js', icon: SiReact, color: '#61DAFB'},
    {name: 'Next.js', icon: SiNextdotjs, color: '#00000'},
    {name: 'Typescript', icon: SiTypescript, color: '#3178C6'},
    {name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4'},
    {name: 'Node.js', icon: SiNodedotjs, color: '#61DAFB'},
    {name: 'MySql', icon: SiMysql, color: '#61DAFB'},
    {name: 'Mongo.db', icon: SiMongodb, color: '#61DAFB'},
    {name: 'PostgresSql', icon: SiPostgresql, color: '#61DAFB'},
    {name: 'Python', icon: SiPython, color: '#61DAFB'},
    {name: 'Django', icon: SiDjango, color: '#61DAFB'},
    {name: 'Golang', icon: FaGolang, color: '#61DAFB'},
    {name: 'Javascript', icon: SiJavascript, color: '#61DAFB'},
  ]

  return (
    <div className="relative py-20 bg-black overflow-hidden" id="about">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left  */}
          <div className="flex flex-col gap-12 ">
            <div className="flex flex-col gap-8">
              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/20 bg-primary/10 rounded-full w-fit">
                  <FaCode className="w-4 h-4 text-primary" />
                  <span className="text-sm text-white font-bold">
                    Full Stack Web Dev
                  </span>

                  <IoSparkles className="w-4 h-4 text-primary" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tighter">
                  Crafting Digital Experience That Matter...
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-white/60 leading-relaxed text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={300}>
              <div className="grid grid-cols-3 gap-8">
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                    <div className="text-3xl font-normal text-white mb-2 font-mono">
                      {stat.value}
                    </div>

                    <p className="text-sm text-white/60 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = PERSONAL_INFO.resume;
                  link.download = "My-Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center gap-3 bg-white text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group"
              >
                <FaDownload className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                Download My Resume
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About

                  