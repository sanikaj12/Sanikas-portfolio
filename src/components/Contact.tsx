import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sanikasjoshi12@gmail.com",
      link: "mailto:sanikasjoshi12@gmail.com"
    },
    {
      icon: Mail,
      label: "Alternate Email",
      value: "sanikajoshi1211@gmail.com",
      link: "mailto:sanikajoshi1211@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8459570755",
      link: "tel:+918459570755"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sangli, Maharashtra, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sanikajoshi",
      color: "hover:bg-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sanika-joshi-32755a230",
      color: "hover:bg-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-smooth cursor-default inline-block">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6 animate-scale-in" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up hover:text-foreground/80 transition-smooth">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className="p-6 shadow-soft hover:shadow-large transition-smooth border-2 hover:border-primary/30 animate-bounce-in hover:scale-[1.05]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.link ? (
                  <a 
                    href={item.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-smooth flex-shrink-0 group-hover:scale-110 group-hover:rotate-6">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground/70 transition-smooth">{item.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-smooth group-hover:translate-x-1">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 group cursor-default">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 group-hover:scale-110 transition-smooth">
                      <item.icon className="w-5 h-5 text-primary animate-float-slow" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <Card className="p-8 shadow-medium border-2 text-center animate-scale-in hover:shadow-large transition-smooth">
            <h3 className="text-xl font-bold mb-6 animate-fade-in-down">Connect on Social Media</h3>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant="outline"
                  className={`${social.color} hover:text-primary-foreground transition-smooth border-2 shadow-soft hover:shadow-medium hover:scale-110 hover:rotate-3 animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <social.icon className="w-5 h-5" />
                    {social.label}
                  </a>
                </Button>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center animate-fade-in-up pt-8">
            <p className="text-lg text-muted-foreground mb-4 animate-pulse-soft">
              Ready to start a conversation?
            </p>
            <Button 
              asChild
              size="lg"
              className="gap-2 shadow-medium hover:shadow-large transition-smooth bg-primary hover:bg-primary/90 hover:scale-110 group animate-bounce-in"
            >
              <a href="mailto:sanikasjoshi12@gmail.com">
                <Mail className="w-5 h-5 group-hover:animate-wiggle" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
