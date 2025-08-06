import { ArrowRight, MapPin, Users, Sparkles } from 'lucide-react';
import heroImage from '@/assets/fredrick-hero-bg.jpg';
import profileImage from '@/assets/fredrick-profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background with African-inspired pattern overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-background/20"></div>
      </div>
      
      {/* Floating geometric elements inspired by African patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-full floating"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rotate-45 floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-accent/30 floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-40 w-8 h-8 bg-primary/20 rounded-full floating" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="fade-in grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Nairobi, Kenya 🇰🇪</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Fredrick Mwangolo</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-foreground mb-4 font-medium">
              Tech Innovator | Leadership Enthusiast | Problem Solver
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Passionate about creating technology solutions that empower communities 
              and drive positive change across Africa. Building the future, one innovation at a time.
            </p>

            {/* Achievement Highlights */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Aiducation Alumni</span>
              </div>
              <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Career Academy Coordinator</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover-scale glow transition-all duration-300"
              >
                Let's Collaborate
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Glowing background circle */}
              <div className="absolute inset-0 bg-gradient-african rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-card">
                <img
                  src={profileImage}
                  alt="Fredrick Mwangolo"
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/40 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-lg rotate-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;