import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Fredrick Mwangolo
            </h3>
            <p className="text-muted-foreground">
              Tech Innovator | Leadership Enthusiast | Problem Solver
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:freddiekarimah@gmail.com"
              className="p-3 glass-card rounded-lg hover-scale transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/fredrickmwangolo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-lg hover-scale transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/fredrickmwangolo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-lg hover-scale transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-4">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Fredrick Mwangolo</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Building technology solutions that empower communities across Africa
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;