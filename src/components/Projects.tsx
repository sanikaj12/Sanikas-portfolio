import { Brain, Camera, CarFront } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export const Projects = () => {
  const projects = [
    {
      icon: Camera,
      title: "Smart CCTV",
      year: "Third Year",
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
      title: "Arduino Vehicle Accident Alert System",
      year: "Second Year",
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

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent hover:scale-105 transition-smooth cursor-default inline-block">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full animate-scale-in" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-large transition-smooth border-2 hover:border-primary/50 animate-bounce-in overflow-hidden hover:scale-[1.05] cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                {/* Icon with gradient background */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-smooth flex items-center justify-center mb-4 group-hover:animate-wiggle group-hover:scale-110">
                  <project.icon className="w-7 h-7 text-primary group-hover:drop-shadow-lg" />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="hover:scale-110 transition-smooth">{project.year}</Badge>
                  <Badge variant="outline" className="border-primary/30 hover:scale-110 transition-smooth">{project.role}</Badge>
                </div>

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
          ))}
        </div>
      </div>
    </section>
  );
};
