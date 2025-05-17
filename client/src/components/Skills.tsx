import { technicalSkills, expertiseAreas } from "../lib/data";

export default function Skills() {
  // Helper function to render skill level indicator
  const renderSkillLevel = (level: number) => {
    const maxLevel = 10;
    const dots = [];
    
    for (let i = 1; i <= maxLevel; i++) {
      dots.push(
        <div 
          key={i} 
          className={`h-3 w-3 rounded-full ${
            i <= level 
              ? 'bg-primary' 
              : 'bg-muted border border-primary/20'
          }`}
        />
      );
    }
    
    return (
      <div className="flex space-x-1 mt-1">
        {dots}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">My Skills</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            I've worked with a variety of technologies across the software development stack. 
            Here are some of the key skills I've developed over the years.
          </p>
          <div className="flex items-center justify-center mt-4 text-sm text-foreground/60">
            <span className="mr-2">Skill level scale:</span>
            <span className="inline-block h-2 w-2 rounded-full bg-primary mr-1"></span>
            <span>1 (Beginner) to 10 (Expert)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          <div className="h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            
            {technicalSkills.map((skill) => (
                <div className="mb-8 bg-card rounded-lg p-5 border border-border shadow-sm min-h-[140px]" key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm font-semibold text-primary">{skill.level}/10</span>
                  </div>
                  {renderSkillLevel(skill.level)}
                  <p className="mt-3 text-sm text-foreground/70">{skill.description}</p>
                </div>

            ))}
          </div>
          
          <div className="h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-6">Areas of Expertise</h3>
            <div className="flex flex-col gap-20 pt-4 pb-4 h-full justify-center">
              {expertiseAreas.map((area) => (
                  <div key={area.title} className="bg-card py-4 px-4 rounded-lg shadow-sm border border-border transition-all hover:shadow-md flex min-h-[140px]">
                  <div className="text-primary mr-3 mt-1 flex-shrink-0">
                    <i className={`fas ${area.icon} text-2xl text-primary`}></i>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-1">
                      {area.title}
                    </h4>
                    <p className="text-sm md:text-base text-foreground/70 line-clamp-2">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
