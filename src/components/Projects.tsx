import { Camera, CarFront, Gavel, Receipt, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

type ProjectCategory = "professional" | "academic";

interface Project {
  icon: LucideIcon;
  category: ProjectCategory;
  title: string;
  meta: string;
  role: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

const SubsectionHeading = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-8 animate-slide-in-left">
    <h3 className="text-2xl md:text-3xl font-bold bg-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-smooth cursor-default inline-block">
      {title}
    </h3>
    <div className="w-14 h-0.5 bg-accent mt-3 rounded-full animate-scale-in" />
    <p className="text-muted-foreground mt-3 max-w-xl">{description}</p>
  </div>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isProfessional = project.category === "professional";

  return (
    <Card
      className={`group overflow-hidden hover:scale-[1.05] cursor-pointer transition-smooth border-2 animate-bounce-in ${
        isProfessional
          ? "border-primary/40 hover:border-primary/70 shadow-medium hover:shadow-large bg-gradient-to-br from-card via-card to-primary/5"
          : "hover:border-primary/50 hover:shadow-large"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardHeader>
        {/* Icon with gradient background */}
        <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:from-primary/30 group-hover:to-accent/30 transition-smooth flex items-center justify-center mb-4 group-hover:animate-wiggle group-hover:scale-110">
          <project.icon className="w-7 h-7 text-primary group-hover:drop-shadow-lg" />
        </div>

        <div className="flex items-center justify-between mb-2 gap-2">
          {isProfessional ? (
            <Badge variant="default" className="bg-gradient-to-r from-primary to-accent hover:scale-110 transition-smooth">
              Professional Project
            </Badge>
          ) : (
            <Badge variant="secondary" className="hover:scale-110 transition-smooth">{project.meta}</Badge>
          )}
          <Badge variant="outline" className="border-primary/30 hover:scale-110 transition-smooth">{project.role}</Badge>
        </div>

        {isProfessional && (
          <p className="text-sm font-semibold text-primary mb-1">{project.meta}</p>
        )}

        <CardTitle className="text-xl group-hover:text-primary transition-smooth group-hover:translate-x-2">
          {project.title}
        </CardTitle>

        <CardDescription className="line-clamp-3 group-hover:text-foreground/70 transition-smooth">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Highlights */}
        <div className="space-y-2">
          {project.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 group/item hover:translate-x-2 transition-smooth">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-smooth" />
              <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-smooth">{highlight}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <Badge key={idx} variant="outline" className="text-xs hover:scale-110 hover:bg-primary/10 transition-smooth">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs hover:scale-110 hover:bg-primary/10 transition-smooth">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const Projects = () => {
  const projects: Project[] = [
    {
      icon: Gavel,
      category: "professional",
      title: "E-Auction Platform for Sugar Mills",
      meta: "Web Application · Prototype",
      role: "Frontend Developer",
      description: "A role-based e-auction platform designed for sugar mills and traders, supporting tender management, mill membership, live bidding, winner selection, and auction history.",
      technologies: ["React.js", "TypeScript", "REST APIs", "Axios", "Tailwind CSS"],
      highlights: [
        "Role-based interfaces for Admin and Trader workflows",
        "Tender, membership, bidding & winner selection flows",
        "REST API integration for auth, tenders & auction data"
      ]
    },
    {
      icon: Receipt,
      category: "professional",
      title: "Smart Invoice Hub",
      meta: "Billing & Inventory Web Application",
      role: "Frontend Developer",
      description: "A business-focused billing and inventory platform for managing customers, products, categories, brands, invoices, payments, and inventory operations.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Axios", "REST APIs"],
      highlights: [
        "CRUD workflows for products, customers, categories & brands",
        "Invoices with GST/tax, payments & status management",
        "Dashboards, analytics & REST API integration"
      ]
    },
    {
      icon: Camera,
      category: "academic",
      title: "Smart CCTV",
      meta: "Third Year",
      role: "Team Associate",
      description: "Created an intelligent CCTV system using computer vision and YOLO object detection. Successfully deployed in KIT's Boys Hostel for real-world application.",
      technologies: ["Python", "YOLO", "Computer Vision", "Image Processing", "Tkinter"],
      highlights: [
        "Real-time object detection using YOLO",
        "Webcam integration with Python",
        "Tkinter-based GUI"
      ]
    },
    {
      icon: CarFront,
      category: "academic",
      title: "Arduino Vehicle Accident Alert System",
      meta: "Second Year",
      role: "Team Leader",
      description: "Led the development of an IoT-based accident detection system using Arduino, GPS, and GSM modules. Designed web interface for real-time monitoring and database management.",
      technologies: ["C Programming", "Arduino", "GPS", "GSM", "HTML", "CSS", "Accelerometer"],
      highlights: [
        "Hardware integration with Arduino",
        "GPS location tracking",
        "Web-based monitoring dashboard"
      ]
    }
  ];

  const professionalProjects = projects.filter((project) => project.category === "professional");
  const academicProjects = projects.filter((project) => project.category === "academic");

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-smooth cursor-default inline-block">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full animate-scale-in" />
          <p className="text-muted-foreground text-base md:text-lg mt-6 max-w-2xl mx-auto animate-fade-in-up">
            Real-world applications, business solutions, and academic projects I've built.
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-16">
          <SubsectionHeading
            title="Professional Projects"
            description="Projects developed through professional and independent work."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Academic Projects */}
        <div>
          <SubsectionHeading
            title="Academic Projects"
            description="Projects developed during my academic journey."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {academicProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
