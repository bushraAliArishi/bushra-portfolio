// src/components/Projects.tsx
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

interface Project {
  title: string
  link?: string
  description: string
  tech: string[]
  type: string
  highlights: string[]
}

interface Props {
  projects: Project[]
}

export default function Projects({ projects }: Props) {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card cursor-pointer block"
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      {project.title}
                      {project.link && <ExternalLink className="h-4 w-4" />}
                    </CardTitle>
                    <Badge variant="secondary">{project.type}</Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Key Highlights:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
