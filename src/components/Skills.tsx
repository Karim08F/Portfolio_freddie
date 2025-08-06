import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"]
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Python", "Express.js", "FastAPI", "Django", "PHP"]
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase"]
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["React Native", "Flutter", "Ionic", "Swift", "Kotlin", "Expo"]
    },
    {
      title: "Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"]
    },
    {
      title: "Design",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Sketch", "Canva"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="skill-card glass-card p-6 rounded-xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3 group-hover:text-accent transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300"
                  >
                    <span className="text-foreground">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-primary' : 'bg-muted'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Programming Languages Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">
            Primary Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "PHP", "Swift"].map((lang) => (
              <div
                key={lang}
                className="px-6 py-3 glass-card rounded-full hover-scale cursor-pointer group"
              >
                <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                  {lang}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;