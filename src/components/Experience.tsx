import { Briefcase, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      role: "Frontend Developer",
      company: "HATS, shstratva Technologies Pvt Ltd.",
      location: "Pune",
      period: "Present",
      description: "Developing and maintaining user interfaces for web applications including HATS platform (hats.shstra.in) and SHSTRA main website (shstra.in). Responsible for creating responsive, modern UI components using React.js and ensuring optimal user experience across different devices and browsers.",
      projects: [
        {
          name: "HATS Platform",
          url: "https://hats.shstra.in/",
          description: "Developed comprehensive UI for the HATS platform"
        },
        {
          name: "SHSTRA Website", 
          url: "https://shstra.in/",
          description: "Created and maintained the main SHSTRA company website"
        }
      ],
      skills: ["React.js", "Frontend Development", "UI/UX Design", "Responsive Design", "Team Collaboration", "Modern Web Technologies"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-smooth cursor-default inline-block">
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full animate-scale-in" />
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 shadow-medium hover:shadow-large transition-smooth border-l-4 border-l-primary group animate-slide-in-left hover:scale-[1.02] cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-smooth flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 animate-float-slow">
                    <exp.icon className="w-8 h-8 text-primary group-hover:animate-pulse-soft" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth group-hover:translate-x-2">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-medium text-primary group-hover:scale-105 transition-smooth inline-block">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <Badge variant="secondary" className="w-fit hover:scale-110 transition-smooth">
                        {exp.period}
                      </Badge>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-smooth">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-smooth">
                    {exp.description}
                  </p>

                  {/* Projects */}
                  {exp.projects && (
                    <div className="space-y-3 pt-3">
                      <h4 className="text-sm font-semibold text-foreground/90">Key Projects:</h4>
                      <div className="space-y-2">
                        {exp.projects.map((project, projIdx) => (
                          <div key={projIdx} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-smooth group/project">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <div className="flex-grow">
                              <a 
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-primary hover:text-accent transition-smooth group-hover/project:underline"
                              >
                                {project.name}
                              </a>
                              <p className="text-xs text-muted-foreground mt-1">{project.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="border-primary/30 hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer animate-fade-in"
                        style={{ animationDelay: `${(index * 150) + (idx * 100)}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
