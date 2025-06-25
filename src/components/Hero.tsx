// src/components/Hero.tsx
import React from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Github, Code, MapPin, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 tech-grid">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 float-animation">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center glow-effect">
              <Code className="w-16 h-16 text-primary-foreground" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Backend Developer</span>
            <br />
            <span className="text-muted-foreground">& No-Code Specialist</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering internal operations with scalable backend systems, no-code automation, and smart IT administration
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* TODO: onClick → scroll to contact */}
            <Button size="lg" className="glow-effect">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            {/* TODO: onClick → scroll to projects */}
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          <div className="flex justify-center items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Riyadh, Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+966 530 577 725</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
