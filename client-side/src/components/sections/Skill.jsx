import React from 'react'
import { skills } from '../../data/skills'

const Skill = () => {

  const skillCategories = {
    'Frontend Development' : [
      skills.find(s => s.name === 'React.js'),
      skills.find(s => s.name === 'Javascript'),
      skills.find(s => s.name === 'Next.js'),
      skills.find(s => s.name === 'Typescripts'),
      skills.find(s => s.name === 'Tailwind CSS'),
    ].filter(Boolean),
    'Backend Development' : [
       skills.find(s => s.name === 'MongoDB'),
       skills.find(s => s.name === 'PostgresSql'),
       skills.find(s => s.name === 'Node.js'),
    ].filter(Boolean),
    'Other Tools' : [
       skills.find(s => s.name === 'Git and Github'),
       skills.find(s => s.name === 'Figma'),
    ].filter(Boolean),
  }

  const getProficiencyLevel = (level) => {
    const levels = {
      'Expert': '98',
      'Advanced': '85',
      'Intermediate': '70',
      'Beginner': '50',
    };
    return levels[level] || 50;
  };

  const getProficiencyColor = (level) => {
    const colors = {
      'Expert': 'bg-green-500 text-green-500 border-green-500',
      'Advanced': 'bg-blue-500 text-blue-500 border-blue-500',
      'Intermediate': 'bg-yellow-500 text-yellow-500 border-yellow-500',
      'Beginner': 'bg-red-500 text-red-500 border-red-500',
    };

    return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500'
  }

  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default Skill
