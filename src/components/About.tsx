import { Code2, Database, SquareTerminal } from "lucide-react";
import { Card } from "./ui/card";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Developer",
      description: "React.js · JavaScript · TypeScript · HTML · CSS · Tailwind CSS"
    },
    {
      icon: Database,
      title: "API & Data",
      description: "REST APIs · Axios · MySQL"
    },
    {
      icon: SquareTerminal,
      title: "Development Tools",
      description: "Git · GitHub · VS Code · Postman · Bruno · Cursor · Trae"
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
              I'm a <span className="font-semibold text-primary hover:text-primary/80 transition-smooth cursor-default">Frontend Developer</span> with 1+ year of professional experience building ERP and business applications using React.js, TypeScript, JavaScript, Tailwind CSS, and REST APIs. Currently working as a 
              <span className="font-semibold text-accent hover:text-accent/80 transition-smooth cursor-default"> Software Developer at HATS, Shastratva Technologies Pvt Ltd.</span>, 
              where I contribute to technical projects developing front-end applications using React.js.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed hover:scale-[1.02] transition-smooth text-center">
              My experience includes developing ERP and business applications for real-world workflows such as harvesting and transportation, e-auctions, invoicing, inventory and payments. I enjoy transforming complex business requirements into clean, intuitive interfaces that are easy to use and maintain.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed hover:scale-[1.02] transition-smooth text-center">
              I focus on building reusable UI components, responsive layouts, REST API integrations, form workflows, validation, and meaningful loading, success, and error states. I also work closely with designers and stakeholders to improve usability and deliver practical solutions.
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
