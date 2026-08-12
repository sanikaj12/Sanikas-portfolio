import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

type SkillTier = "primary" | "secondary" | "supporting";

interface Skill {
  name: string;
  tier: SkillTier;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
  color: string;
  featured?: boolean;
}

const badgeClasses: Record<SkillTier, string> = {
  primary:
    "border-transparent bg-gradient-to-r from-primary to-accent text-white shadow-medium text-sm font-semibold px-3.5 py-1.5 hover:scale-110 transition-smooth cursor-pointer animate-fade-in",
  secondary:
    "text-sm py-1.5 px-3 hover:scale-110 transition-smooth hover:bg-primary hover:text-primary-foreground cursor-pointer animate-fade-in",
  supporting:
    "border-primary/20 text-muted-foreground hover:border-primary/50 hover:text-foreground hover:scale-110 transition-smooth cursor-pointer animate-fade-in"
};

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend & Web",
      color: "from-primary to-accent",
      featured: true,
      skills: [
        { name: "React.js", tier: "secondary" },
        { name: "TypeScript", tier: "secondary" },
        { name: "JavaScript", tier: "secondary" },
        { name: "Tailwind CSS", tier: "secondary" },
        { name: "HTML", tier: "secondary" },
        { name: "CSS", tier: "secondary" },
        { name: "Responsive Design", tier: "secondary" }
      ]
    },
    {
      category: "API & Backend",
      color: "from-accent to-primary",
      skills: [
        { name: "REST APIs", tier: "secondary" },
        { name: "Axios", tier: "secondary" }
      ]
    },
    {
      category: "Databases",
      color: "from-primary to-accent",
      skills: [
        { name: "MySQL", tier: "supporting" },
        // { name: "Supabase", tier: "supporting" }
      ]
    },
    {
      category: "Development Tools",
      color: "from-accent to-primary",
      skills: [
        { name: "Git", tier: "supporting" },
        { name: "GitHub", tier: "supporting" },
        { name: "VS Code", tier: "supporting" },
        { name: "Postman", tier: "supporting" },
        { name: "Bruno", tier: "supporting" },
        { name: "Cursor", tier: "supporting" },
        { name: "Trae", tier: "supporting" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-primary via-accent to-primary bg-clip-text text-transparent hover:scale-105 transition-smooth cursor-default inline-block">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full animate-scale-in" />
          <p className="text-muted-foreground text-base md:text-lg mt-6 max-w-2xl mx-auto animate-fade-in-up">
            Technologies and tools I use to build responsive, API-driven web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-6 shadow-soft hover:shadow-large transition-smooth border-2 animate-rotate-in hover:scale-[1.02] group cursor-pointer ${
                category.featured
                  ? "border-primary/40 hover:border-primary/50 shadow-medium bg-gradient-to-br from-card via-card to-primary/5"
                  : "hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary group-hover:scale-105 transition-smooth inline-block">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant={skill.tier === "supporting" ? "outline" : "secondary"}
                    className={badgeClasses[skill.tier]}
                    style={{ animationDelay: `${(index * 100) + (idx * 50)}ms` }}
                  >
                    {skill.name}
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
