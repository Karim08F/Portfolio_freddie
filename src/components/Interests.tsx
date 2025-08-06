import { Brain, Rocket, Users, Globe, Code2, Lightbulb, Music, Camera } from 'lucide-react';

const Interests = () => {
  const techInterests = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence",
      description: "Exploring machine learning algorithms and AI applications in web development",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Space Technology",
      description: "Fascinated by space exploration and satellite communication systems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web3 & Blockchain",
      description: "Building decentralized applications and exploring cryptocurrency technologies",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Open Source",
      description: "Contributing to open source projects and building tools for the developer community",
      color: "from-orange-500 to-red-500"
    }
  ];

  const personalInterests = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Always looking for creative solutions to complex problems"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentoring",
      description: "Teaching and guiding aspiring developers in their journey"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music Production",
      description: "Creating electronic music and exploring sound design"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography",
      description: "Capturing moments and experimenting with visual storytelling"
    }
  ];

  return (
    <section id="interests" className="py-20 px-6 bg-gradient-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Interests & Passions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What drives my curiosity and fuels my passion for technology and creativity
          </p>
        </div>

        {/* Tech Interests */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            Technology Interests
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {techInterests.map((interest, index) => (
              <div
                key={interest.title}
                className="group relative overflow-hidden glass-card rounded-xl p-8 hover-scale transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-primary group-hover:text-accent transition-colors duration-300 mb-4">
                    {interest.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">
                    {interest.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            Beyond Code
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInterests.map((interest, index) => (
              <div
                key={interest.title}
                className="glass-card p-6 rounded-xl text-center hover-scale transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary group-hover:text-accent transition-colors duration-300 mb-4 flex justify-center">
                  {interest.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {interest.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What Excites Me Section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              What Excites Me About Tech
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-accent">Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  The endless possibilities of creating something that has never existed before
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Impact</h4>
                <p className="text-muted-foreground text-sm">
                  Building solutions that make a real difference in people's lives
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Learning</h4>
                <p className="text-muted-foreground text-sm">
                  The constant evolution of technology keeps every day exciting and challenging
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;