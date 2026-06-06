import { useLanguage } from '../i18n/LanguageContext';

const Filmography = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-cinematic-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Filmography */}
          <div className="lg:col-span-2">
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">{t.experience.title}</h2>
            <h3 className="text-4xl font-serif font-bold text-white mb-12">{t.experience.heading}</h3>
            <div className="space-y-0">
              {t.experience.projects.map((project: any, index: number) => (
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
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">{t.experience.expertise}</h2>
            <h3 className="text-4xl font-serif font-bold text-white mb-12">{t.experience.skills}</h3>
            <div className="flex flex-wrap gap-3">
              {t.experience.skillList.map((skill: string, index: number) => (
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
                {t.experience.testimonial}
              </p>
              <p className="text-gold text-xs uppercase tracking-widest mt-4 font-bold">
                — {t.experience.testimonialAuthor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filmography;
