import { Code2, Sparkles, Trophy } from "lucide-react";
import { Card } from "./ui/card";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "Experienced in React.js, Flutter, and modern web technologies"
    },
    {
      icon: Sparkles,
      title: "Machine Learning",
      description: "Applied ML algorithms in real-world projects and research"
    },
    {
      icon: Trophy,
      title: "Problem Solver",
      description: "Top 20 finish in KIT AVINYA Hackathon & deployed projects"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a <span className="font-semibold text-primary">Computer Science Engineering graduate</span> from 
              Kolhapur Institute of Technology with a CGPA of 8.64. Currently working as a 
              <span className="font-semibold text-secondary"> Software Development Engineer Intern at SHSTRA</span>, 
              where I contribute to technical projects developing front-end applications using React.js.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              My passion lies in creating <span className="font-semibold text-accent">innovative solutions</span> that 
              merge cutting-edge technology with practical applications. From machine learning models 
              for healthcare to smart surveillance systems, I love tackling challenges that make a real impact.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              As a <span className="font-semibold text-primary">self-learner and team player</span>, I'm constantly 
              exploring new technologies and methodologies. I also serve as an advisor in the Documentation Team 
              at Team ACSES, sharing knowledge and supporting collaborative projects.
            </p>
          </div>

          {/* Right - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 shadow-soft hover:shadow-medium transition-smooth border-2 hover:border-primary/50 group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-smooth">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
