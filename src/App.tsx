import React, { useState, useEffect, JSX } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Smartphone,
  Users,
  Award,
  Calendar,
  ChevronDown,
  Moon,
  Sun
} from 'lucide-react'
import './App.css'

interface Skill {
  backend: string[]
  nocode: string[]
  cloud: string[]
  tools: string[]
  admin: string[]
}

interface Project {
  title: string
  description: string
  tech: string[]
  type: string
  highlights: string[]
}

interface Experience {
  title: string
  company: string
  period: string
  achievements: string[]
}

function App(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const skills: Skill = {
    backend: ['Java', 'Spring Boot', 'RESTful APIs', 'MySQL', 'PostgreSQL'],
    nocode: ['Bubble.io', 'OutSystems', 'Make.com', 'Zapier'],
    cloud: ['Google Cloud', 'Alibaba Cloud', 'AWS Basics'],
    tools: ['Git', 'VS Code', 'Postman', 'Notion', 'Figma'],
    admin: ['Google Workspace', 'Microsoft 365', 'SaaS Management']
  }

  const projects: Project[] = [
    {
      title: 'Focus - Booking Management System',
      description: 'A comprehensive backend system for managing booking workflows between photographers and editors, built with Java and Spring Boot.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Postman'],
      type: 'Backend Development',
      highlights: ['Complete booking logic implementation', 'Role-based conditions', 'API testing and validation']
    },
    {
      title: 'Bani - Construction Equipment Marketplace',
      description: 'A no-code marketplace platform for construction equipment rentals with advanced booking and payment systems.',
      tech: ['Bubble.io', 'SEO', 'Payment Integration'],
      type: 'No-Code Development',
      highlights: ['Led 3-member development team', 'Custom login system', 'Financial modules for accounting']
    },
    {
      title: 'i-be X - AI Platform',
      description: 'Youth-centric AI platform offering smart tools, chatbots, and competitions with dynamic prompt management.',
      tech: ['Bubble.io', 'AI Integration', 'User Management'],
      type: 'AI Platform Development',
      highlights: ['AI tool integration', 'Dynamic prompt structures', 'Subscription management']
    },
    {
      title: 'i-be Hub - Internal Management System',
      description: 'Centralized hub for internal task and communication management with role-based dashboards.',
      tech: ['Bubble.io', 'Workflow Design', 'Documentation'],
      type: 'Internal Systems',
      highlights: ['Stakeholder requirement analysis', 'Role-based dashboards', 'Process flow implementation']
    }
  ]

  const experience: Experience[] = [
    {
      title: 'Technical Specialist',
      company: 'i-be Group',
      period: 'Jan 2024 – Present',
      achievements: [
        'Deployed and maintained 2 internal mobile applications',
        'Managed Google Workspace for 45+ employees',
        'Coordinated SaaS subscriptions across 3 franchise branches',
        'Developed advanced admin dashboards using Bubble.io'
      ]
    },
    {
      title: 'Senior Technical Developer',
      company: 'i-be',
      period: 'Aug 2022 – Jan 2024',
      achievements: [
        'Built dynamic backend logic using Bubble.io',
        'Integrated third-party APIs and resolved 20+ support cases',
        'Trained and mentored over 10 interns and junior staff',
        'Re-published deleted Android app by resolving policy violations'
      ]
    }
  ]

  const certifications: string[] = [
    'Web Development Using Java – Tuwaiq Academy (Jan 2025)',
    'Cloud Computing & Artificial Intelligence – Tuwaiq Academy (Aug 2024)',
    'Cloud Computing Engineer – Tuwaiq Academy x Alibaba Cloud',
    'Ethical Generative AI – Tuwaiq Academy x Alibaba Cloud',
    'Digital Transformation Professional – MCI (2021)'
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold gradient-text">Bushra Ali Arishi</h1>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              <Button size="lg" className="glow-effect">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              
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

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Detail-oriented backend and no-code developer with practical experience in designing internal platforms and process flows. 
                Trained in Java and Spring Boot through project-based learning and capstone delivery during a structured bootcamp.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Skilled in building backend logic, documenting database structures, and translating business needs into usable admin dashboards 
                using tools like Bubble.io, Lucidchart, and Notion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Known for ownership, adaptability, and the ability to document, support, and improve SaaS infrastructure with attention to detail and structured delivery.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              
              <Tabs defaultValue="backend" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="nocode">No-Code</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>
                
                <TabsContent value="backend" className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} className="skill-badge">{skill}</Badge>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="nocode" className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.nocode.map((skill) => (
                      <Badge key={skill} className="skill-badge">{skill}</Badge>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="tools" className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {[...skills.tools, ...skills.admin].map((skill) => (
                      <Badge key={skill} className="skill-badge">{skill}</Badge>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="project-card">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.type}</Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Highlights:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Professional Experience</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="project-card">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Certifications</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-8">
              Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="glow-effect">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
            
            <div className="flex justify-center items-center gap-6 text-muted-foreground">
              <a href="mailto:bushra.arishi@example.com" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-6">
          &copy; {new Date( ).getFullYear()} Bushra Ali Arishi. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
