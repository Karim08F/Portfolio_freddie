import { Download, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "New York, USA",
      period: "2018 - 2022",
      achievements: [
        "Graduated Magna Cum Laude (GPA: 3.8/4.0)",
        "Dean's List for 6 consecutive semesters",
        "President of Computer Science Society",
        "Winner of Annual Hackathon 2021"
      ]
    },
    {
      degree: "Full Stack Web Development Certification",
      institution: "FreeCodeCamp",
      location: "Online",
      period: "2022",
      achievements: [
        "300+ hours of hands-on coding",
        "Built 5 responsive web applications",
        "Mastered modern JavaScript frameworks",
        "Completed all certification projects"
      ]
    },
    {
      degree: "AWS Cloud Practitioner Certification",
      institution: "Amazon Web Services",
      location: "Online",
      period: "2023",
      achievements: [
        "Cloud computing fundamentals",
        "AWS core services expertise",
        "Security and compliance knowledge",
        "Cost optimization strategies"
      ]
    }
  ];

  const handleDownloadCV = () => {
    // This would typically trigger a download of the actual CV file
    // For demo purposes, we'll just show an alert
    alert("CV download would be implemented here!");
  };

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development journey
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
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className="md:ml-20 w-full">
                  <div className="glass-card p-8 rounded-xl hover-scale transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-primary mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xl text-foreground mb-2">
                          {edu.institution}
                        </h4>
                      </div>
                      <div className="flex flex-col sm:items-end space-y-2">
                        <div className="flex items-center text-accent">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="flex items-center text-lg font-medium mb-4 text-accent">
                        <Award className="w-5 h-5 mr-2" />
                        Key Achievements
                      </h5>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
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

        {/* Additional Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
            Additional Certifications & Courses
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Google Cloud Platform",
              "MongoDB University",
              "React Advanced Patterns",
              "Machine Learning Basics",
              "UI/UX Design Principles",
              "Agile & Scrum Master"
            ].map((cert) => (
              <div
                key={cert}
                className="glass-card p-4 rounded-lg text-center hover-scale transition-all duration-300"
              >
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;