import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b border-border",
        isScrolled ? "bg-background/95" : "bg-background/80"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold gradient-text"
              data-testid="nav-logo"
            >
              Vidhilika Gupta
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="nav-mobile-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="nav-mobile-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="nav-mobile-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="nav-mobile-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
                data-testid="nav-mobile-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
