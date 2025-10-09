import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-background via-card/20 to-background">
      <div className="container mx-auto max-w-8xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8 animate-scale-in" />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card - Let's Connect */}
          <Card className="p-8 shadow-soft hover:shadow-large transition-smooth border-2 hover:border-primary/30 animate-bounce-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm currently working as a Frontend Developer at HATS, shstratva Technologies Pvt Ltd., but I'm always open to new opportunities 
              and collaborations. Whether you have a project idea, want to discuss technology, or just want to connect, I'd love to hear from you!
            </p>

            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              {/* Email */}
              <a 
                href="mailto:sanikasjoshi12@gmail.com"
                className="flex items-center gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-smooth"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-smooth">
                    sanikasjoshi12@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/sanika-joshi-32755a230"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-smooth"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-smooth">
                    linkedin.com/in/sanika-joshi-32755a230
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/sanikaj12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-smooth"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-smooth">
                    github.com/sanikaj12
                  </p>
                </div>
              </a>
            </div>

            {/* Current Status */}
            <div className="border-t pt-6">
              <h4 className="font-semibold text-foreground mb-3">Current Status</h4>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Currently employed as Frontend Developer at HATS, shstratva Technologies Pvt Ltd.</span>
              </div>
            </div>
          </Card>

          {/* Right Card - Send Me a Message */}
          <Card className="p-8 shadow-soft hover:shadow-large transition-smooth border-2 hover:border-primary/30 animate-bounce-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="phone"
                  placeholder="Your Phone Number"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full min-h-[120px] resize-y"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-medium hover:shadow-large transition-smooth hover:scale-[1.02] group"
              >
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
