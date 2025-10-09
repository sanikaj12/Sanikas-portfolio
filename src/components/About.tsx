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
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-smooth cursor-default inline-block">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full animate-scale-in" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Description */}
          <div className="space-y-6 mb-12 animate-fade-in-up">
            <p className="text-lg text-foreground/90 leading-relaxed hover:scale-[1.02] transition-smooth text-center">
              I'm a <span className="font-semibold text-primary hover:text-primary/80 transition-smooth cursor-default">Computer Science Engineering graduate</span> with a CGPA of 8.64. Currently working as a 
              <span className="font-semibold text-accent hover:text-accent/80 transition-smooth cursor-default"> Software Developer at HATS, Shastratva Technologies Pvt Ltd.</span>, 
              where I contribute to technical projects developing front-end applications using React.js.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed hover:scale-[1.02] transition-smooth text-center">
              My passion lies in creating <span className="font-semibold text-accent hover:text-accent/80 transition-smooth cursor-default">innovative solutions</span> that 
              merge cutting-edge technology with practical applications. From machine learning models 
              for healthcare to smart surveillance systems, I love tackling challenges that make a real impact.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed hover:scale-[1.02] transition-smooth text-center">
              As a <span className="font-semibold text-primary hover:text-primary/80 transition-smooth cursor-default">self-learner and team player</span>, I'm constantly 
              exploring new technologies and methodologies. I also serve as an advisor in the Documentation Team 
              at Team ACSES, sharing knowledge and supporting collaborative projects.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 shadow-soft hover:shadow-large transition-smooth border-2 hover:border-primary/50 group animate-scale-in hover:scale-[1.03] cursor-pointer text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:from-primary/30 group-hover:to-accent/30 transition-smooth group-hover:scale-110 group-hover:rotate-6">
                    <item.icon className="w-6 h-6 text-primary group-hover:animate-pulse-soft" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">{item.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-smooth text-sm">{item.description}</p>
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
