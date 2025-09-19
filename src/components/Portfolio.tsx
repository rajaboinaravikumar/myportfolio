 import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Download, ArrowDown, Linkedin, Instagram, Youtube,} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import profilePhoto from '@/assets/profile-photo.png';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Python', level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 80, color: 'from-blue-500 to-blue-700' },
    { name: 'Node.js', level: 75, color: 'from-green-400 to-green-600' },
    { name: 'Typescript', level: 70, color: 'from-green-500 to-green-700' },
    { name: 'CSS/Tailwind', level: 60, color: 'from-purple-400 to-purple-600' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Spotify Clone Website',
      description: 'Full-stack Spotify with React, Node.js, and MongoDB. Features include user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      githubUrl: '',
      liveUrl: ''
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      githubUrl: '',
      liveUrl: ''
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design.',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
      githubUrl: ''
    }
  ];

  const downloadResume = () => {
    // In a real application, this would trigger a download of your actual resume
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // You would replace this with your actual resume file
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.05
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 z-10" />
        
        <div className="relative z-20 px-6 max-w-7xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Ravi Kumar</span><br />
                  <span className="gradient-text">FULL STACK DEVELOPER</span>
                </h1>
              </div>
              
              <div className="typewriter text-xl md:text-2xl text-muted-foreground h-8">
                Content Creator
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                 Focused on building scalable and user-friendly applications powered by React, Node.js, and cloud technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glow-effect text-lg px-8 py-6">
                  Code. Create. Grow. Repeat - →
                </Button>
                <Button variant="outline" size="lg" onClick={downloadResume} className="text-lg px-8 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
              
              {/* Social Media Links */}
              <div className="flex justify-center sm:justify-start gap-4 mt-6">
                <a 
                  href="https://www.linkedin.com/in/ravi-kumar-a85797254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary/50 border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-110 glow-effect"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a 
                  href="https://www.instagram.com/raviramtechtalks?igsh=b2RoN2k2cGl5cnVs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary/50 border border-accent/20 flex items-center justify-center hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 hover:scale-110 glow-effect"
                >
                  <Instagram className="h-5 w-5 text-accent" />
                </a>
                <a 
                  href="https://youtube.com/@raviramtechtalks?si=WKDJvN5ahRDnUPeo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary/50 border border-red-400/20 flex items-center justify-center hover:bg-red-400/10 hover:border-red-400/40 transition-all duration-300 hover:scale-110 glow-effect"
                >
                  <Youtube className="h-5 w-5 text-red-400" />
                </a>
              </div>
            </div>
            
            {/* Right side - Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl floating">
                  <img 
                    src={profilePhoto} 
                    alt="Profile Photo" 
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: '110% 55%'
                    }}
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 pointer-events-none"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 animate-pulse-glow pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        data-section 
        className={`py-20 px-6 fade-in-up ${visibleSections.has('about') ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                I’m Ravi Kumar, a passionate B.Tech student,
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                 Aspiring Software Engineer, and tech creator. Alongside my studies, I actively freelance, build impactful full-stack projects, and create educational content that empowers students in technology and career growth. With a growing community of 30K+ Instagram followers, 1K+ YouTube subscribers, and an active Telegram network, I blend technical expertise with leadership and communication to inspire and support others
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My goal is to begin my journey as a Software Engineer, contribute to innovative projects, and continue guiding students toward success in the tech world.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="skill-glow">Problem Solver</Badge>
                <Badge variant="secondary" className="skill-glow">Team Player</Badge>
                <Badge variant="secondary" className="skill-glow">Quick Learner</Badge>
                <Badge variant="secondary" className="skill-glow">Mentor</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Technical Skills</h4>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: visibleSections.has('about') ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        data-section 
        className={`py-20 px-6 bg-secondary/50 fade-in-up ${visibleSections.has('projects') ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`gradient-border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                  visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        data-section 
        className={`py-20 px-6 fade-in-up ${visibleSections.has('contact') ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-effect">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" onClick={downloadResume}>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;