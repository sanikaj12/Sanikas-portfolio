import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sanika Joshi
            </h3>
            <p className="text-sm text-muted-foreground">
              Software Developer & Computer Science Engineer
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
              About
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-smooth">
              Experience
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth">
              Projects
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-smooth">
              Skills
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Sanika Joshi. Made with{" "}
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-soft" />{" "}
              and passion for technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
