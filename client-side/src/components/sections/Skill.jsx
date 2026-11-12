import React from 'react'
import { skills } from '../../data/skills'
import { IoSparkles } from "react-icons/io5";
import FadeIn from '../animation/FadeIn';

const Skill = () => {

  const skillCategories = {
    'Frontend Development': [
      skills.find(s => s.name === 'React.js'),
      skills.find(s => s.name === 'Javascript'),
      skills.find(s => s.name === 'Next.js'),
      skills.find(s => s.name === 'Typescript'),
      skills.find(s => s.name === 'Tailwind CSS'),
      skills.find(s => s.name === 'Shadcn UI'),
      skills.find(s => s.name === 'React Query'),
    ].filter(Boolean),

    'Backend Development': [
      skills.find(s => s.name === 'MongoDB'),
      skills.find(s => s.name === 'PostgreeSql'),
      skills.find(s => s.name === 'Node.js'),
      skills.find(s => s.name === 'Golang'),
      skills.find(s => s.name === 'Python'),
    ].filter(Boolean),

    'Other Tools': [
      skills.find(s => s.name === 'Git and Github'),
      skills.find(s => s.name === 'Figma'),
       skills.find(s => s.name === 'Responsive Design'),
    ].filter(Boolean),
  };

  // Normalize proficiency levels
  const normalizeLevel = (level) => {
    if (!level) return '';

    const normalized = level.toLowerCase();

    if (normalized === 'begineer') return 'Beginner';

    return normalized.charAt(0).toUpperCase() + normalized.slice(1);
  };

  // Get proficiency percentage
  const getProficiencyLevel = (level) => {
    const levels = {
      Expert: 98,
      Advanced: 85,
      Intermediate: 70,
      Beginner: 50,
    };

    return levels[normalizeLevel(level)] || 50;
  };

  // Get proficiency badge colors
  const getProficiencyColor = (level) => {
    const colors = {
      Expert: 'bg-green-500/10 text-green-400 border-green-500/30',
      Advanced: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      Intermediate: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      Beginner: 'bg-red-500/10 text-red-400 border-red-500/30',
    };

    return colors[normalizeLevel(level)] || 'text-gray-400 bg-gray-500/20 border-gray-500';
  };

  return (
    <div id='skill' className='relative py-20 bg-black overflow-hidden'>

      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50' />
        <div className='absolute bottom-1/5 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        <FadeIn delay={100}>
          <div className='text-center mb-16'>

            <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
              <IoSparkles className='w-6 h-6 text-primary' />

              <span className='text-sm text-primary font-medium'>
                My Expertise
              </span>
            </div>

            <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
              Skills & Technologies
            </h2>

            <p className='text-lg text-white/60 max-w-2xl mx-auto'>
              A Comprehensive overview of my technical skills and Proficiency.
            </p>

          </div>
        </FadeIn>

        {/* Skills and Categories */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (

            <FadeIn delay={categoryIndex * 100} key={category}>

              <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group'>

                <div className='flex items-center gap-3 mb-6 pb-4 border-b border-white/10'>

                  <div className='w-1 h-8 bg-linear-to-b from-primary/30 to-primary/10 rounded-full' />

                  <h3 className='text-xl font-medium text-white'>
                    {category}
                  </h3>

                </div>

                {/* Skills List */}
                <div className='space-y-6'>

                  {categorySkills.map((skill) => {

                    const IconComponent = skill.icon;
                    const proficiency = getProficiencyLevel(skill.level);

                    return (

                      <div key={skill.id} className='space-y-3'>

                        {/* Skill Information and Proficiency */}
                        <div className='flex items-center justify-between gap-3'>

                          {/* Icon, Name and Experience */}
                          <div className='flex items-center gap-3 min-w-0'>

                            <div className=' shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg text-primary'>
                              <IconComponent className='w-5 h-5' />
                            </div>

                            <div className='min-w-0'>

                              <div className='text-white font-medium'>
                                {skill.name}
                              </div>

                              <div className='text-sm text-white/50'>
                                {skill.experience || skill.expereince}
                              </div>

                            </div>

                          </div>

                          {/* Proficiency Badge */}
                          <span className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap ${getProficiencyColor(skill.level)}`}>
                            {normalizeLevel(skill.level)}
                          </span>

                        </div>

                        {/* Proficiency Progress Bar */}
                        <div className='w-full h-1.5 bg-white/10 rounded-full overflow-hidden'>

                          <div
                            className='h-full bg-primary rounded-full transition-all duration-500'
                            style={{ width: `${proficiency}%` }}
                          />

                        </div>

                      </div>

                    );

                  })}

                </div>

                {/* Hover Glow Effect */}
                <div className='absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

              </div>

            </FadeIn>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Skill