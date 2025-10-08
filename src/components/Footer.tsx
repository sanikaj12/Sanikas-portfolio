import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          {/* Brand */}
          <div className="space-y-2 animate-fade-in">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent bg-[length:200%_auto] hover:animate-gradient-shift cursor-default hover:scale-105 transition-smooth inline-block">
              Sanika Joshi
            </h3>
            <p className="text-sm text-muted-foreground hover:text-foreground/80 transition-smooth">
              Software Developer & Computer Science Engineer
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm animate-fade-in-up">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 inline-block hover:-translate-y-1">
              About
            </a>
            <span className="text-muted-foreground animate-pulse-soft">•</span>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 inline-block hover:-translate-y-1">
              Experience
            </a>
            <span className="text-muted-foreground animate-pulse-soft">•</span>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 inline-block hover:-translate-y-1">
              Projects
            </a>
            <span className="text-muted-foreground animate-pulse-soft">•</span>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 inline-block hover:-translate-y-1">
              Skills
            </a>
            <span className="text-muted-foreground animate-pulse-soft">•</span>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 inline-block hover:-translate-y-1">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="pt-4 border-t border-border/50 animate-fade-in-up">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Sanika Joshi. Made with{" "}
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-soft hover:scale-125 transition-smooth cursor-pointer" />{" "}
              and passion for technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
