import { Award, Rocket, BookOpen } from "lucide-react";
import { Card } from "./ui/card";

export const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "E-SUMMIT'23 Hackathon",
      description: "Secured position in Top 20 in KIT AVINYA-Hackathon organized by E-Cell KITCoEK",
      color: "from-primary to-secondary"
    },
    {
      icon: Rocket,
      title: "Project Deployment",
      description: "Successfully deployed Smart CCTV mini project in KIT's Boys Hostel for real-world application",
      color: "from-secondary to-accent"
    },
    {
      icon: BookOpen,
      title: "Course Certifications",
      description: "Completed certifications in Data Structures, Web Development, Cloud Computing, AWS ML-Foundations, IIT Varanasi ML Workshop, and Personality Development",
      color: "from-accent to-primary"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent hover:scale-105 transition-smooth cursor-default inline-block">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full animate-scale-in" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="p-6 shadow-soft hover:shadow-large transition-smooth border-2 hover:border-primary/50 group text-center animate-scale-in hover:scale-[1.08] cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-smooth flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-in animate-float-slow">
                <achievement.icon className="w-8 h-8 text-primary group-hover:scale-125 transition-smooth" />
              </div>

              {/* Content */}
              <h3 className={`text-lg font-bold mb-3 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-gradient-shift`}>
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-smooth">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
