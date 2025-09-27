import { Monitor, Server, Database, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: ["React","Redux","Context API", "Angular", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: ["Node.js", "Express.js","Socket.IO", "Python", "Django", "Java", "REST APIs", "JWT Auth", "API Integration"]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["MongoDB", "Firebase", "MySQL", "SQLite3"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Postman","WebSockets", "Redux Toolkit", "React Query", "Vite", "npm","Google Maps API"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="skills-title">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="skills-subtitle">
            Expertise across modern web technologies and frameworks
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card rounded-xl p-8 border border-border hover-lift"
                data-testid={`skills-category-${index}`}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <IconComponent className="w-6 h-6 mr-3 text-primary" />
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="tech-badge bg-secondary text-secondary-foreground px-4 py-3 rounded-lg text-center font-medium"
                      data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
