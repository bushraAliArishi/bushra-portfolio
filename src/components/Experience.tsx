// src/components/Experience.tsx
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from 'lucide-react'

interface Experience {
  title: string
  company: string
  period: string
  achievements: string[]
}

interface Props {
  experience: Experience[]
}

export default function Experience({ experience }: Props) {
  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Professional Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, idx) => (
            <a
              key={idx}
              href={`https://${exp.company.replace(/\s+/g, '').toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block cursor-pointer"
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-1" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
