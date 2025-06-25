// src/App.tsx
import React, { useState, useEffect } from 'react'
import './App.css'

import NavigationSection from '@/components/NavigationSection'
import Hero              from '@/components/Hero'
import About             from '@/components/About'
import Projects          from '@/components/Projects'
import Experience        from '@/components/Experience'
import Contact           from '@/components/Contact'
import Footer            from '@/components/Footer'

import { Project as P, Experience as E } from './types'  // لو حطيت التعريف في ملف types.ts

// مثال بيانات:
const projects: P[] = [ /* … */ ]
const experience: E[] = [ /* … */ ]

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationSection darkMode={darkMode} toggleDarkMode={() => setDarkMode(d => !d)} />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Contact />
      <Footer />
    </div>
  )
}
