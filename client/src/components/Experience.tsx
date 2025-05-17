import { workExperience } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Work Experience</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My professional journey across different companies and roles.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <div 
              key={index} 
              className={`timeline-item relative pl-10 ${index < workExperience.length - 1 ? 'pb-12' : ''}`}
            >
              <div className="absolute left-0 top-1 bg-primary rounded-full h-7 w-7 flex items-center justify-center">
                {job.icon ? (
                  <i className={`fas ${job.icon} text-background text-xs`}></i>
                ) : (
                  <div className="bg-background rounded-full h-2 w-2"></div>
                )}
              </div>
              <div className="bg-card rounded-xl shadow-md border border-border p-6 transition-all hover:shadow-lg">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                      <i className={`fas ${job.icon || 'fa-building'} text-primary`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="text-foreground/70 bg-muted px-3 py-1 rounded-full text-sm inline-block">
                      {job.period}
                    </p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  {job.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
