import { Briefcase, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      role: "Software Development Engineer Intern",
      company: "SHSTRA",
      location: "Pune",
      period: "Present",
      description: "Contributing to technical projects as a Software Developer, responsible for developing front-end applications using React.js",
      skills: ["React.js", "Frontend Development", "Team Collaboration"]
    },
    {
      icon: Users,
      role: "Team Member - Documentation Team",
      company: "Team ACSES",
      location: "Kolhapur",
      period: "Present",
      description: "Working as an advisor in the Documentation Team, contributing to project documentation and knowledge sharing",
      skills: ["Technical Writing", "Team Leadership", "Documentation"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-smooth cursor-default inline-block">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-scale-in" />
        </div>

        <div className="space-y-6">
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
