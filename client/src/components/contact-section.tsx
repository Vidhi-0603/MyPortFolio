import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="contact-title">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="contact-subtitle">
            Ready to collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 border border-border hover-lift" data-testid="contact-email-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">Send me a message</p>
                  </div>
                </div>
                <a
                  href="mailto:gvidhilika0606@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                  data-testid="contact-email-link"
                >
                  gvidhilika0606@gmail.com
                </a>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border hover-lift" data-testid="contact-linkedin-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">LinkedIn</h3>
                    <p className="text-muted-foreground">Let's connect professionally</p>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/vidhilika-gupta-a9a213214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                  data-testid="contact-linkedin-link"
                >
                  linkedin.com/in/vidhilika-gupta-a9a213214
                </a>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border hover-lift" data-testid="contact-github-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">GitHub</h3>
                    <p className="text-muted-foreground">Check out my repositories</p>
                  </div>
                </div>
                <a
                  href="https://github.com/Vidhi-0603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                  data-testid="contact-github-link"
                >
                  github.com/Vidhi-0603
                </a>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border" data-testid="contact-info-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Build Something Amazing</h3>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  I'm always interested in new opportunities and collaborations. Whether you have a project in mind, 
                  need a full-stack developer, or just want to connect, I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center" data-testid="contact-availability-fulltime">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Available for full-time opportunities</span>
                  </div>
                  <div className="flex items-center" data-testid="contact-availability-freelance">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Open to freelance projects</span>
                  </div>
                  <div className="flex items-center" data-testid="contact-availability-remote">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Interested in remote work</span>
                  </div>
                  <div className="flex items-center" data-testid="contact-availability-consulting">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm">Available for technical consultations</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="mailto:gvidhilika0606@gmail.com"
                    className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground text-base font-medium rounded-lg hover:bg-primary/90 transition-colors w-full justify-center"
                    data-testid="contact-send-email"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
