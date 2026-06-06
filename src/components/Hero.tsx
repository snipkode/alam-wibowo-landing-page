import { PlayCircle, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-cinematic-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" 
          alt="Alam Wibowo Portrait" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center md:text-left">
        <div className="max-w-3xl">
          <h2 className="text-gold text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Actor • Talent • Presenter • Digital Creator
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000">
            ALAM <br /> WIBOWO
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-xl font-sans leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Professional Talent for Commercial, Corporate, Film, TVC, and Digital Content.
            <span className="block mt-2 text-sm text-neutral-400">Playing Age: 28 – 35 Years • Bandung / Jakarta</span>
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <a 
              href="#showreel" 
              className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-white transition-all duration-300"
            >
              <PlayCircle size={20} /> Watch Showreel
            </a>
            <a 
              href="#" 
              className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <Download size={20} /> Download CV
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300"
            >
              <Mail size={20} /> Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-gold" />
      </div>
    </section>
  );
};

export default Hero;
