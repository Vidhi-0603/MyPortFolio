import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold gradient-text" data-testid="footer-name">Vidhilika Gupta</h3>
            <p className="text-muted-foreground mt-2" data-testid="footer-role">Full-Stack Developer | MCA Student</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Vidhi-0603"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/vidhilika-gupta-a9a213214/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:gvidhilika0606@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p data-testid="footer-copyright">&copy; 2025 Vidhilika Gupta. All rights reserved.</p>
            <p className="mt-1" data-testid="footer-tech">Built with React and modern web technologies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
