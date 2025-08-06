import { Code2, Database, Globe, Smartphone, Server, Palette, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const programmingLanguages = [
    { name: "Python", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "Java", level: 80, color: "bg-red-500" },
    { name: "C++", level: 75, color: "bg-purple-500" },
    { name: "SQL", level: 85, color: "bg-green-500" },
    { name: "HTML/CSS", level: 95, color: "bg-orange-500" }
  ];

  const frameworks = [
    { name: "React", level: 90, icon: <Globe className="w-5 h-5" /> },
    { name: "Node.js", level: 85, icon: <Server className="w-5 h-5" /> },
    { name: "Django", level: 80, icon: <Code2 className="w-5 h-5" /> },
    { name: "Git", level: 88, icon: <GitBranch className="w-5 h-5" /> },
    { name: "Docker", level: 75, icon: <Database className="w-5 h-5" /> },
    { name: "AWS", level: 70, icon: <Cloud className="w-5 h-5" /> }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: ["Python", "Node.js", "Django", "Express.js", "REST APIs", "GraphQL"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Database Management",
      icon: <Database className="w-8 h-8" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Firebase"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["React Native", "Flutter", "Android Studio", "iOS Development"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS", "Docker", "Git", "Linux", "CI/CD", "Kubernetes"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Figma", "Adobe XD", "Canva", "User Research", "Prototyping"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set for building innovative technology solutions
          </p>
        </div>

        {/* Programming Languages with Progress Bars */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            Programming Languages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmingLanguages.map((lang, index) => (
              <div
                key={lang.name}
                className="glass-card p-6 rounded-xl hover-scale transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-foreground">{lang.name}</span>
                  <span className="text-sm text-primary font-medium">{lang.level}%</span>
                </div>
                <div className="w-full bg-secondary/30 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out`}
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            Frameworks & Tools
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <div
                key={framework.name}
                className="glass-card p-6 rounded-xl hover-scale transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="text-primary group-hover:text-accent transition-colors duration-300 mr-3">
                      {framework.icon}
                    </div>
                    <span className="font-semibold text-foreground">{framework.name}</span>
                  </div>
                  <span className="text-sm text-primary font-medium">{framework.level}%</span>
                </div>
                <div className="w-full bg-secondary/30 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${framework.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            Technical Domains
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group relative overflow-hidden glass-card rounded-xl p-6 hover-scale transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors duration-300 mr-3">
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-foreground text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech for Good Focus */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Tech for Good Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every technical skill I develop is guided by a commitment to creating positive social impact. 
              I believe technology should serve humanity, bridge divides, and create opportunities for 
              underserved communities across Africa and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;