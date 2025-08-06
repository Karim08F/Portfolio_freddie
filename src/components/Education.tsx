import { Download, Calendar, MapPin, Award, Star, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Dedan Kimathi University of Technology",
      location: "Nyeri, Kenya",
      period: "2020 - Present",
      status: "Senior Student",
      achievements: [
        "Consistent Dean's List Performance",
        "Tech Innovation Club Leader",
        "Hackathon Winner - AgriTech Challenge 2023",
        "Computer Science Society Executive Member"
      ]
    },
    {
      degree: "Aiducation International Summer School",
      institution: "Aiducation International",
      location: "Kenya",
      period: "2022",
      status: "Alumni",
      achievements: [
        "Leadership Development Program Graduate",
        "Community Impact Project Leader",
        "Cross-cultural Collaboration Certificate",
        "Entrepreneurship Skills Training"
      ]
    },
    {
      degree: "Career Academy Coordinator",
      institution: "Career Academy Kenya",
      location: "Nairobi, Kenya",
      period: "2023 - Present",
      status: "Current Position",
      achievements: [
        "Mentored 50+ students in career development",
        "Designed tech career pathway programs",
        "Organized industry networking events",
        "Youth empowerment workshop facilitator"
      ]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Google Project Management",
    "Python for Data Science",
    "React Advanced Development",
    "Agile & Scrum Methodology",
    "Digital Marketing Fundamentals"
  ];

  const handleDownloadCV = () => {
    // This would trigger actual CV download
    alert("CV download functionality - Connect to implement file serving!");
  };

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building knowledge and leadership skills for impactful innovation
          </p>
        </div>

        {/* CV Download Section */}
        <div className="text-center mb-16">
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover-scale glow transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download My CV
          </button>
          <p className="text-muted-foreground mt-2 text-sm">
            Complete academic and professional background
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background z-10">
                  <div className="w-full h-full bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="md:ml-20 w-full">
                  <div className="glass-card p-8 rounded-xl hover-scale transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-2xl font-semibold text-primary mr-3">
                            {edu.degree}
                          </h3>
                          <div className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                            {edu.status}
                          </div>
                        </div>
                        <h4 className="text-xl text-foreground mb-2">
                          {edu.institution}
                        </h4>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                        <div className="flex items-center text-accent">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="flex items-center text-lg font-medium mb-4 text-primary">
                        <Trophy className="w-5 h-5 mr-2" />
                        Key Achievements
                      </h5>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <Star className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Certifications */}
          <div className="glass-card p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-primary">
                Certifications & Courses
              </h3>
            </div>
            <div className="grid gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-center p-3 bg-secondary/20 rounded-lg hover:bg-secondary/40 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Impact */}
          <div className="glass-card p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Star className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-2xl font-semibold text-primary">
                Leadership Impact
              </h3>
            </div>
            <div className="space-y-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Students Mentored</div>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Workshops Organized</div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Tech Projects Led</div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Philosophy */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Continuous Learning Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Education is not just about acquiring knowledge—it's about transforming that knowledge 
              into meaningful action that benefits society. Through my academic journey and leadership 
              experiences, I've learned that true education empowers us to lift others as we climb.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Innovation", "Leadership", "Service", "Excellence"].map((value) => (
                <div
                  key={value}
                  className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full font-medium hover-scale transition-all duration-300"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;