import { useLanguage } from '../i18n/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-cinematic-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">{t.education.title}</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">{t.education.heading}</h3>
          
          <div className="grid gap-8">
            {t.education.items.map((item: any, index: number) => (
              <div 
                key={index} 
                className="group relative p-8 bg-cinematic-gray border border-white/5 hover:border-gold/30 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-gold transition-all duration-500 group-hover:h-full" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-gold text-sm font-bold tracking-widest uppercase mb-2 block">
                      {item.year}
                    </span>
                    <h4 className="text-xl md:text-2xl font-serif text-white group-hover:text-gold transition-colors">
                      {item.degree}
                    </h4>
                    <p className="text-neutral-400 mt-1 uppercase tracking-wider text-xs font-bold">
                      {item.institution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
