import { GraduationCap, Users, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Fredrick
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging technology and community impact through innovation and leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a senior student at Dedan Kimathi University of Technology and proud alumnus of 
                Aiducation International Summer School, I've dedicated my academic and professional 
                journey to leveraging technology for social good.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently serving as a coordinator at Career Academy, I'm passionate about creating 
                pathways for youth development and mentoring the next generation of African tech innovators.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-2xl font-semibold text-primary">What Drives Me</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Empowering communities through technology</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Youth mentorship and leadership development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Creating innovative solutions for African challenges</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Building sustainable tech ecosystems</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-muted-foreground">Years in Tech</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">Students Mentored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Community Focus</div>
                </div>
              </div>
            </div>
            
            {/* Mission Statement */}
            <div className="glass-card p-6 rounded-xl mt-6">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-accent mr-3" />
                <h4 className="text-lg font-semibold text-primary">Mission</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To leverage technology as a catalyst for positive change, creating innovative solutions 
                that empower communities, foster youth development, and contribute to Africa's digital 
                transformation journey.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-lg rotate-12"></div>
          </div>
        </div>

        {/* African Tech Innovation Section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Championing African Tech Innovation
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Developing cutting-edge solutions that address real-world challenges in the African context
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Leadership</h4>
                <p className="text-muted-foreground text-sm">
                  Fostering the next generation of tech leaders through mentorship and guidance
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Impact</h4>
                <p className="text-muted-foreground text-sm">
                  Creating sustainable change that uplifts communities and drives social progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;