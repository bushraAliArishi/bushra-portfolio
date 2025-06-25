// src/components/About.tsx
import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Detail-oriented backend and no-code developer with practical experience in designing internal platforms and process flows.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Skilled in building backend logic, documenting database structures, and translating business needs into usable admin dashboards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Known for ownership, adaptability, and the ability to document, support, and improve SaaS infrastructure.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
            {/* Tabs logic can stay here or be moved to its own component */}
          </div>
        </div>
      </div>
    </section>
  )
}
