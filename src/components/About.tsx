import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-cinematic-black relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase">
        {t.about.backgroundText}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">{t.about.title}</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              {t.about.heading}
            </h3>
            <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale transition-all duration-500 hover:grayscale-0">
                <img 
                  src="https://images.unsplash.com/photo-1519085115970-36002951576f?q=80&w=600&auto=format&fit=crop" 
                  alt="Professional look" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-cinematic-gray flex items-center justify-center p-8 border border-white/5">
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-gold mb-1">50+</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">{t.about.projectsDone}</div>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square bg-gold/10 flex items-center justify-center p-8 border border-gold/20">
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-gold mb-1">2026</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">{t.about.activeYear}</div>
                </div>
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale transition-all duration-500 hover:grayscale-0">
                <img 
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600&auto=format&fit=crop" 
                  alt="Casual look" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
