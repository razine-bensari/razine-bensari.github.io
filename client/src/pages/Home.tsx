import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") as string;
        const sectionTop = section.getBoundingClientRect().top;
        
        // Adjust the offset as needed for when to consider a section in view
        if (sectionTop < 100 && sectionTop > -300) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="theme-preference">
      <div className="min-h-screen flex flex-col bg-background text-foreground relative">
        <BackgroundAnimation />
        <div className="relative z-10">
          <Header activeSection={activeSection} />
          <main>
            <Hero />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
