import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import PalestineBanner from "./PalestineBanner";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    { id: "experience", text: "Experience" },
    { id: "contact", text: "Contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 shadow-sm backdrop-blur-sm' : 'bg-background/100'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-xl font-heading font-bold text-primary">
              Razine<span className="text-foreground">.Bensari</span>
            </a>
            <PalestineBanner />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`transition-colors font-medium ${
                    activeSection === link.id ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.text}
                </a>
              ))}
            </nav>
            
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Switch 
                id="theme-toggle" 
                checked={theme === "dark"} 
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-secondary"
              />
              <Label htmlFor="theme-toggle" className="cursor-pointer">
                {theme === "dark" ? (
                  <i className="fas fa-moon text-secondary"></i>
                ) : (
                  <i className="fas fa-sun text-primary"></i>
                )}
              </Label>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle Mobile */}
            <Switch 
              id="theme-toggle-mobile" 
              checked={theme === "dark"} 
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-secondary"
            />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pt-4 pb-2`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`py-2 transition-colors font-medium ${
                  activeSection === link.id ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
