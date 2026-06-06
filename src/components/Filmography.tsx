const Filmography = () => {
  const projects = [
    { year: '2026', title: 'Green SM Commercial', role: 'Main Talent' },
    { year: '2026', title: 'Corporate Brand Campaign', role: 'Presenter' },
    { year: '2025', title: 'Educational Video Series', role: 'Host' },
    { year: '2025', title: 'Digital Marketing Campaign', role: 'Supporting Talent' },
    { year: '2025', title: 'Business Profile Video', role: 'Lead Presenter' },
  ];

  const skills = [
    'Acting Dialogue', 'Commercial Acting', 'Corporate Acting', 'Presenter', 
    'Public Speaking', 'Interview Simulation', 'Voice Over', 'Improvisation', 
    'Content Creation', 'AI Content Production'
  ];

  return (
    <section className="py-24 bg-cinematic-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Filmography */}
          <div className="lg:col-span-2">
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Experience</h2>
            <h3 className="text-4xl font-serif font-bold text-white mb-12">Filmography</h3>
            <div className="space-y-0">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="group flex items-center justify-between py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-4 -mx-4"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-gold font-serif text-xl opacity-50 group-hover:opacity-100 transition-opacity">
                      {project.year}
                    </span>
                    <div>
                      <h4 className="text-white font-bold tracking-wide group-hover:text-gold transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">
                        {project.role}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-12 h-[1px] bg-white/10 group-hover:w-24 group-hover:bg-gold transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Expertise</h2>
            <h3 className="text-4xl font-serif font-bold text-white mb-12">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-cinematic-black border border-white/10 text-neutral-300 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-16 p-8 bg-cinematic-black border border-gold/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 border-t border-r border-gold" />
              </div>
              <p className="text-neutral-400 italic text-sm relative z-10">
                "Professional, punctual, and easy to direct. Strong communication and excellent camera presence."
              </p>
              <p className="text-gold text-xs uppercase tracking-widest mt-4 font-bold">
                — Production Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filmography;
