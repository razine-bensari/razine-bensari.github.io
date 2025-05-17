import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="pt-32 pb-20 px-6 md:pt-40 md:pb-28">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <div className="rounded-full w-64 h-64 mx-auto md:mx-0 overflow-hidden border-4 border-primary shadow-xl bg-secondary/10">
              <img 
                src="/assets/images/profile-pic.png" 
                alt="Razine Bensari" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/5 md:pl-10">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-2">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary">Razine Bensari</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary/80 mb-6 font-heading">
              Software Engineer
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Passionate about building scalable, high-performance systems that power modern applications.
              With experience spanning backend development, full-stack engineering, and DevOps, I specialize in designing robust, data-driven architectures and solving complex system design challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-white"
                onClick={() => handleScrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
