import React from 'react'
import Navbar from './components/layouts/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skill from './components/sections/Skill'
import Project from './components/sections/Project'

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
      < Navbar />

      <main>
        < Hero />
        <About />
        <Skill />
        <Project />
      </main>
    </div>
  )
}

export default App
