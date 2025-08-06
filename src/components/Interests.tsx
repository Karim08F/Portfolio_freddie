import { Lightbulb, Users, Heart, Globe, Rocket, Code, BookOpen, Mic } from 'lucide-react';

const Interests = () => {
  const techInterests = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Tech for Good",
      description: "Developing technology solutions that address social challenges and empower underserved communities",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Youth Mentorship",
      description: "Guiding young minds in technology and leadership, creating pathways for success",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "African Tech Innovation",
      description: "Contributing to Africa's digital transformation through innovative technological solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation Research",
      description: "Exploring cutting-edge technologies like AI, blockchain, and IoT for practical applications",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const personalInterests = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Leadership Development",
      description: "Studying leadership principles and applying them in tech and community settings"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Open Source",
      description: "Contributing to open source projects that benefit the global developer community"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Public Speaking",
      description: "Sharing knowledge at tech conferences and community events across Kenya"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Tackling complex challenges with creative and innovative technological approaches"
    }
  ];

  return (
    <section id="interests" className="py-20 px-6 bg-gradient-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Passions & Interests
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What drives my commitment to technology, leadership, and community impact
          </p>
        </div>

        {/* Core Interests */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            Core Passions
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

        {/* Additional Interests */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-primary">
            Beyond Technology
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

        {/* Community Impact Focus */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Community Impact Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Empowerment</h4>
                <p className="text-muted-foreground text-sm">
                  Using technology to create opportunities and empower individuals to reach their full potential
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Education</h4>
                <p className="text-muted-foreground text-sm">
                  Sharing knowledge and skills to build a stronger tech community across Africa
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Pioneering solutions that address real-world challenges and drive sustainable development
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass-card p-6 rounded-xl max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold mb-3 text-primary">
              Let's Create Impact Together
            </h4>
            <p className="text-muted-foreground mb-4">
              Interested in collaborating on tech-for-good projects or discussing innovative solutions? 
              I'd love to connect with like-minded individuals and organizations.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover-scale transition-all duration-300"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;