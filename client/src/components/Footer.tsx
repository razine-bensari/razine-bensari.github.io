import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold font-heading mb-2">
              <span className="text-primary">Razine</span>
              <span className="text-foreground"> Bensari</span>
            </h3>
            <p className="text-foreground/60">Software Engineer</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a 
                href="#about" 
                className="text-foreground/70 hover:text-primary transition-colors"
                onClick={(e) => handleScrollToSection(e, "about")}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-foreground/70 hover:text-primary transition-colors"
                onClick={(e) => handleScrollToSection(e, "skills")}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="text-foreground/70 hover:text-primary transition-colors"
                onClick={(e) => handleScrollToSection(e, "experience")}
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className="text-foreground/70 hover:text-primary transition-colors"
                onClick={(e) => handleScrollToSection(e, "contact")}
              >
                Contact
              </a>
            </nav>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors" 
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors" 
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors" 
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-foreground/60">
            &copy; {currentYear} Razine Bensari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
