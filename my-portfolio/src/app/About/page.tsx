'use client'

import React from 'react'
import About from './components/About'
import Informe from './components/Informe'
import Experience from './components/Experience'
import Education from './components/Education'
import Skill from './components/Skill'
import Project from './components/Project'

export default function AboutPage ()  {
  return (
    <main className='flex flex-col justify-center items-center my-10'>
      <Informe />
      <About />
      <Experience />
      <Education />
      <Skill />
      <Project />
    </main>
  )
}


