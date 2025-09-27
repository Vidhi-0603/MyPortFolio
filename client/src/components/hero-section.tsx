import { GraduationCap, Code, Database, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="block gradient-text" data-testid="hero-name">Vidhilika Gupta</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto" data-testid="hero-description">
              Full-Stack Developer | MCA Student | Building modern web applications with cutting-edge technologies
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-muted-foreground" data-testid="hero-education">
              <GraduationCap className="w-5 h-5" />
              <span>MCA 2024-2026</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground" data-testid="hero-specialization">
              <Code className="w-5 h-5" />
              <span>MERN Stack</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground" data-testid="hero-expertise">
              <Database className="w-5 h-5" />
              <span>Full-Stack Development</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
              data-testid="button-view-work"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center px-8 py-3 border border-border text-base font-medium rounded-lg text-foreground hover:bg-secondary transition-colors"
              data-testid="button-contact"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
