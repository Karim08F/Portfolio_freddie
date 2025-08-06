import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Let's Build Something Amazing
            </h3>
            <p className="text-muted-foreground">
              Thank you for taking the time to explore my work
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-1 text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Your Name</span>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;