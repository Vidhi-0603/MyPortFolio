import { Check, Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
  title: "RideNow",
  description:
    "A full-stack ride-hailing application inspired by Uber, featuring real-time driver tracking, ride booking, and dynamic route visualization using Leaflet and Geoapify APIs with WebSockets.",
  image:
    "https://raw.githubusercontent.com/Vidhi-0603/UberClone/main/Screenshot%202025-09-27%20131232.png",
  features: [
    "Implemented real-time driver and rider tracking using the Geolocation API and Socket.IO.",
    "Integrated Leaflet with Geoapify for map rendering, address autocomplete, distance calculation, and route visualization.",
    "Built secure driver and rider authentication with role-based access using JWT.",
    "Designed a fully responsive UI for smooth usage across desktop and mobile devices."
  ],
  techStack: [
    "React",
    "Vite",
    "Context API",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "WebSockets",
    "Leaflet",
    "Geoapify"
  ],
  githubUrl: "https://github.com/Vidhi-0603/RideNow",
  liveUrl: "https://ridenow-chi.vercel.app/",
  imageOrder: "right"
},
    {
      title: "URL Shortener",
      description: "A full-stack URL shortener application with advanced features for modern web usage.",
      image: "https://raw.githubusercontent.com/Vidhi-0603/URLShortener/main/Screenshot%202025-08-26%20171548.png",
      features: [
        "JWT-based user authentication with secure login/registration system",
        "Custom URL creation capability for registered users with analytics tracking",
        "TanStack Query for optimized data fetching and state management",
        "React Router for seamless navigation and responsive UI design",
        "Real-time click analytics and dashboard for URL management"
      ],
      techStack: ["React", "Vite", "Redux Toolkit", "TanStack Query", "Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com/Vidhi-0603/URLShortener",
      imageOrder: "left"
    },
    {
      title: "ShopseeApp",
      description: "Modern e-commerce web application built with Angular and Firebase for comprehensive shopping experience.",
      image: "https://raw.githubusercontent.com/Vidhi-0603/ShopseeApp/master/Screenshot%202025-08-15%20220346.png",
      features: [
        "Firebase Authentication REST API for secure user signup and login",
        "Firebase Realtime Database for persistent cart and wishlist management",
        "Angular framework with TypeScript for robust e-commerce functionality",
        "DummyJSON API integration for realistic product data and search",
        "Advanced filtering, search suggestions, and responsive design"
      ],
      techStack: ["Angular", "TypeScript", "Firebase Auth", "Firebase Database", "DummyJSON API", "CSS3", "HTML5"],
      githubUrl: "https://github.com/Vidhi-0603/ShopseeApp",
      imageOrder: "right"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="projects-subtitle">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-xl overflow-hidden border border-border hover-lift"
              data-testid={`project-card-${index}`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className={project.imageOrder === "right" ? "lg:order-2" : ""}>
                  <img
                    src={project.image}
                    alt={`${project.title} application screenshot`}
                    className="w-full h-full object-cover"
                    data-testid={`project-image-${index}`}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4" data-testid={`project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start" data-testid={`project-feature-${index}-${featureIndex}`}>
                        <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        data-testid={`project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 border border-border text-sm font-medium rounded-lg text-foreground hover:bg-secondary transition-colors"
                      data-testid={`project-github-${index}`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                    {project.liveUrl && ( <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 border border-border text-sm font-medium rounded-lg text-foreground hover:bg-secondary transition-colors"
                      data-testid={`project-demo-${index}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
