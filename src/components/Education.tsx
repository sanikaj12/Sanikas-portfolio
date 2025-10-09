import { GraduationCap } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Kolhapur Institute of Technology College of Engineering",
      location: "Kolhapur",
      year: "2024",
      score: "CGPA: 8.64",
      scoreType: "excellent"
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Sadguru Gadage Maharaj College",
      location: "Karad",
      year: "2021",
      score: "84.33%",
      scoreType: "good"
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Shri Dharmaraj Vidyalaya",
      location: "Yetgaon",
      year: "2019",
      score: "90.80%",
      scoreType: "excellent"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-smooth cursor-default inline-block">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-scale-in" />
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 shadow-medium hover:shadow-large transition-smooth border-l-4 border-l-accent group animate-slide-in-right hover:scale-[1.02] cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-smooth flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 animate-float-slow">
                    <GraduationCap className="w-8 h-8 text-primary group-hover:animate-bounce-in" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth group-hover:translate-x-2">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground group-hover:scale-105 transition-smooth inline-block">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-foreground group-hover:text-foreground/70 transition-smooth">
                        {edu.location}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="secondary" className="w-fit hover:scale-110 transition-smooth bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        {edu.year}
                      </Badge>
                      <Badge 
                        variant={edu.scoreType === "excellent" ? "default" : "outline"}
                        className={`${edu.scoreType === "excellent" ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "border-accent text-accent"} hover:scale-110 transition-smooth`}
                      >
                        {edu.score}
                      </Badge>
                    </div>
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
