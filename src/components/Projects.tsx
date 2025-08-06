import { ExternalLink, Github, Eye, Star, Leaf, Users, Smartphone, BarChart3 } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: "AgriTech Smart Farming Solution",
      description: "AI-powered mobile application helping Kenyan farmers optimize crop yields through weather data, soil analysis, and farming recommendations. Features real-time monitoring and community knowledge sharing.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=400&fit=crop",
      technologies: ["React Native", "Python", "Django", "Machine Learning", "IoT Sensors"],
      liveLink: "https://agritech-kenya.com",
      githubLink: "https://github.com/fredrickmwangolo/agritech-app",
      impact: "500+ farmers using the platform",
      featured: true,
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Career Guidance Platform",
      description: "Comprehensive platform connecting students with industry mentors for career guidance. Features include skill assessments, career path recommendations, and virtual mentorship sessions.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
      liveLink: "https://career-guidance.co.ke",
      githubLink: "https://github.com/fredrickmwangolo/career-platform",
      impact: "200+ student-mentor connections",
      featured: true,
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Student Management System",
      description: "Modern university administration system for Dedan Kimathi University. Streamlines student registration, grade management, and communication between students and faculty.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker"],
      liveLink: "https://dekut-sms.edu",
      githubLink: "https://github.com/fredrickmwangolo/student-management",
      impact: "5000+ students served",
      featured: true,
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  const otherProjects = [
    {
      title: "Community Impact Tracker",
      description: "Platform for tracking and measuring social impact of community development projects across Kenya.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=300&fit=crop",
      technologies: ["React", "Firebase", "Chart.js", "Tailwind CSS"],
      liveLink: "https://impact-tracker.ke",
      githubLink: "https://github.com/fredrickmwangolo/impact-tracker",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Youth Skills Development App",
      description: "Mobile app providing free tech skills training and certification for African youth.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "Dart", "YouTube API"],
      liveLink: "https://skills-app.africa",
      githubLink: "https://github.com/fredrickmwangolo/skills-app",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Local Business Directory",
      description: "Digital platform promoting local Kenyan businesses with e-commerce capabilities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
      technologies: ["Next.js", "Stripe", "MongoDB", "Vercel"],
      liveLink: "https://business-ke.com",
      githubLink: "https://github.com/fredrickmwangolo/business-directory",
      icon: <ExternalLink className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technology solutions that make a difference in communities across Africa
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`glass-card p-8 rounded-xl ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Impact Metric */}
                  <div className="mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                      {project.impact}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover-scale transition-all duration-300"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            More Impact Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card rounded-xl overflow-hidden hover-scale transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="p-2 bg-background/80 backdrop-blur-sm rounded-lg text-primary">
                      {project.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90 transition-colors duration-300"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-3 py-2 border border-primary text-primary rounded text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Have an idea for a tech-for-good project? Looking for a collaborator who understands 
              the African tech landscape? I'm always excited to work on impactful solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover-scale transition-all duration-300"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
