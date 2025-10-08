import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="inline-block">
            <span className="text-lg font-medium text-primary bg-primary/10 px-6 py-2 rounded-full animate-pulse-soft">
              👋 Hello, I'm
            </span>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-up">
            Sanika Joshi
          </h1>
          
          {/* Title */}
          <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
            Software Developer & Computer Science Engineer
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            B.Tech graduate passionate about creating innovative solutions through 
            full-stack development, machine learning, and mobile applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="gap-2 shadow-medium hover:shadow-large transition-smooth bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 shadow-soft hover:shadow-medium transition-smooth border-2"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com/sanikajoshi" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanika-joshi-32755a230"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sanikasjoshi12@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating decoration */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-2 h-3 bg-primary rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};
