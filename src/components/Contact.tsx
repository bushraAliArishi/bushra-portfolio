// src/components/Contact.tsx
import React from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Get In Touch</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            onClick={() => window.location.href = 'mailto:bushra.arishi@example.com'}
            className="glow-effect"
          >
            <Mail className="mr-2 h-5 w-5" /> Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://www.linkedin.com/in/your-linkedin', '_blank')}
          >
            <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
          </Button>
        </div>
        <div className="flex justify-center items-center gap-6 text-muted-foreground">
          <a href="mailto:bushra.arishi@example.com">
            <Mail className="h-5 w-5 hover:text-primary transition" />
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 hover:text-primary transition" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 hover:text-primary transition" />
          </a>
        </div>
      </div>
    </section>
  )
}
