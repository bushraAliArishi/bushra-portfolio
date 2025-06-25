// src/components/NavigationSection.tsx
"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'

interface Props {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function NavigationSection({
  darkMode,
  toggleDarkMode
}: Props) {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold gradient-text">Bushra Ali Arishi</h1>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <div className="hidden md:flex gap-6">
            <a href="#about"      className="hover:text-primary transition">About</a>
            <a href="#projects"   className="hover:text-primary transition">Projects</a>
            <a href="#experience" className="hover:text-primary transition">Experience</a>
            <a href="#contact"    className="hover:text-primary transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
