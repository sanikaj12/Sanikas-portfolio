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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 shadow-medium hover:shadow-large transition-smooth border-l-4 border-l-accent group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-smooth flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-smooth">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-medium text-accent/90">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.location}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="secondary" className="w-fit">
                        {edu.year}
                      </Badge>
                      <Badge 
                        variant={edu.scoreType === "excellent" ? "default" : "outline"}
                        className={edu.scoreType === "excellent" ? "bg-accent hover:bg-accent/90" : "border-accent/50"}
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
