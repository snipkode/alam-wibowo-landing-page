import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const VideoHub = () => {
  const { t } = useLanguage();

  // Real talent-related dummy videos (Showreels and Acting Demos)
  const showreels = [
    { id: '2Vv9_kFzYV0', title: 'Professional Actor Showreel' }, // Example acting reel
    { id: 'VvY_V_n47mY', title: 'Commercial Acting Demo' }   // Example commercial reel
  ];

  const profiles = [
    { id: 'O7W2SUTW6S4', title: 'Talent Introduction Profile' }, // Example intro
    { id: 'm65G_87U1hY', title: 'Presenter & Public Speaking' } // Example presenter
  ];

  return (
    <section id="showreel" className="py-24 bg-cinematic-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <VideoSlider 
            title={t.video.showreel} 
            subtitle={t.video.official} 
            videos={showreels}
            type="showreel"
            t={t}
          />
          <VideoSlider 
            title={t.video.profile} 
            subtitle={t.video.intro} 
            videos={profiles}
            type="profile"
            t={t}
          />
        </div>
      </div>
    </section>
  );
};

const VideoSlider = ({ title, subtitle, videos, type, t }: any) => {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const next = () => setIndex((prev) => (prev + 1) % videos.length);
  const prev = () => setIndex((prev) => (prev - 1 + videos.length) % videos.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      next();
    } else if (diff < -50) {
      prev();
    }
    setTouchStart(null);
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">{subtitle}</h2>
      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">{title}</h3>
      
      <div 
        className="relative aspect-video bg-neutral-900 mb-6 group overflow-hidden border border-white/5 touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <iframe 
          className="w-full h-full pointer-events-auto"
          src={`https://www.youtube.com/embed/${videos[index].id}?rel=0`}
          title={videos[index].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Navigation Overlays - Hidden on touch to avoid conflict, but areas still work */}
        {videos.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:flex">
            <button 
              onClick={prev}
              className="p-2 bg-black/50 text-white hover:bg-gold hover:text-black transition-colors rounded-full pointer-events-auto"
              aria-label={t.video.prev}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="p-2 bg-black/50 text-white hover:bg-gold hover:text-black transition-colors rounded-full pointer-events-auto"
              aria-label={t.video.next}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Mobile Swipe Hint */}
        {videos.length > 1 && (
          <div className="absolute top-4 right-4 md:hidden">
             <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/10">
                <span className="text-[8px] text-white uppercase tracking-widest font-bold">Swipe to Change Video</span>
             </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mb-6">
        <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">{videos[index].title}</h4>
        <div className="flex gap-2">
          {videos.map((_: any, i: number) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`h-1 w-4 rounded-full transition-all duration-300 ${
                i === index ? 'bg-gold' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-white font-bold uppercase tracking-widest text-xs">
          {type === 'showreel' ? t.video.highlights : t.video.contents}
        </h4>
        {type === 'showreel' ? (
          <div className="flex flex-wrap gap-2">
            {['Commercial Acting', 'Dialogue Scenes', 'Corporate Presenter', 'Cinematic Content', 'Character Acting'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-cinematic-gray border border-white/10 text-neutral-400 text-[10px] uppercase tracking-tighter">
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-neutral-400 text-sm">
            <li>• Self Introduction</li>
            <li>• Close Up / Medium Shot</li>
            <li>• Smile / Serious Expression</li>
            <li>• Sample Dialogue</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default VideoHub;
