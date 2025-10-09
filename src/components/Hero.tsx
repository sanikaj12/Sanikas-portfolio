import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profilePicture from "@/assets/profile-pic2.jpeg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-pulse-soft" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Picture */}
            <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 p-1">
                  <img 
                    src={profilePicture} 
                    alt="Sanika Shrikant Joshi - Software Developer"
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-smooth duration-500"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse-soft" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent/30 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              {/* Greeting */}
              <div className="inline-block animate-bounce-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <span className="text-lg font-medium text-primary bg-primary/10 px-6 py-2 rounded-full animate-pulse-soft hover:scale-110 transition-smooth cursor-default">
                  👋 Hello, I'm
                </span>
              </div>
          
              {/* Name */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                Sanika Shrikant Joshi
              </h1>
              
              {/* Title */}
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                Software Developer & Computer Science Engineer
              </p>
              
              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                B.Tech graduate passionate about creating innovative solutions through 
                full-stack development, machine learning, and mobile applications.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-8 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
                <Button 
                  size="lg" 
                  className="gap-2 shadow-medium hover:shadow-large transition-smooth bg-primary hover:bg-primary/90 hover:scale-105 group"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2 shadow-soft hover:bg-primary hover:text-primary-foreground transition-smooth border-2 hover:scale-105 hover:border-primary"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start pt-8 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
                <a
                  href="https://github.com/sanikaj12" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium hover:scale-110 hover:rotate-12 animate-float-slow"
                  style={{ animationDelay: '0s' }}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanika-joshi-32755a230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium hover:scale-110 hover:rotate-12 animate-float-slow"
                  style={{ animationDelay: '0.5s' }}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sanikasjoshi12@gmail.com"
                  className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium hover:scale-110 hover:rotate-12 animate-float-slow"
                  style={{ animationDelay: '1s' }}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating decoration */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-2 h-3 bg-primary rounded-full animate-pulse-soft" />
        </div>
      </div> */}
    </section>
  );
};
