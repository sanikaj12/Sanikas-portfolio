import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C/C++", "JavaScript", "Python", "Dart", "HTML", "CSS"],
      color: "from-primary to-primary/80"
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React.js", "Flutter", "Flask", "Tkinter"],
      color: "from-secondary to-secondary/80"
    },
    {
      category: "Machine Learning",
      skills: ["SVM", "Decision Tree", "KNN", "Naive Bayes", "YOLO", "Computer Vision", "Image Processing"],
      color: "from-accent to-accent/80"
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL"],
      color: "from-primary to-secondary"
    },
    {
      category: "Tools & Technologies",
      skills: ["VS Code", "Jupyter Notebook", "Git", "Arduino", "Blender", "Canva", "MS Office"],
      color: "from-secondary to-accent"
    },
    {
      category: "Soft Skills",
      skills: ["Self-Learner", "Time Management", "Team Player", "Problem Solving", "Leadership"],
      color: "from-accent to-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-smooth border-2 hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary"
                    className="text-sm py-1.5 px-3 hover:scale-105 transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
