import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Gallery = () => {
  const { t, language } = useLanguage();

  const categories = [
    {
      title: language === 'en' ? 'Professional Look' : 'Tampilan Profesional',
      photos: language === 'en' 
        ? ['Corporate Portrait', 'Business Suit', 'Formal Pose', 'Office Executive']
        : ['Potret Korporat', 'Setelan Bisnis', 'Pose Formal', 'Eksekutif Kantor'],
      images: [
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519085115970-36002951576f?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
      ]
    },
    {
      title: language === 'en' ? 'Character Look' : 'Tampilan Karakter',
      photos: language === 'en'
        ? ['Boss Character', 'Lawyer Character', 'Corporate Manager', 'Government Officer']
        : ['Karakter Bos', 'Karakter Pengacara', 'Manajer Korporat', 'Pejabat Pemerintah'],
      images: [
        'https://images.unsplash.com/photo-1556157382-97dee2dcb341?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=800&auto=format&fit=crop'
      ]
    },
    {
      title: language === 'en' ? 'Casual Look' : 'Tampilan Kasual',
      photos: language === 'en'
        ? ['Smart Casual', 'Lifestyle', 'Friendly Smile', 'Outdoor Portrait']
        : ['Kasual Pintar', 'Gaya Hidup', 'Senyum Ramah', 'Potret Luar Ruangan'],
      images: [
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop'
      ]
    },
    {
      title: language === 'en' ? 'Full Body Look' : 'Tampilan Seluruh Tubuh',
      photos: language === 'en'
        ? ['Standing Pose', 'Walking Pose', 'Action Pose', 'Character Pose']
        : ['Pose Berdiri', 'Pose Berjalan', 'Pose Aksi', 'Pose Karakter'],
      images: [
        'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1512485694743-99a481c24b12?q=80&w=800&auto=format&fit=crop'
      ]
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-cinematic-gray">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">{t.gallery.title}</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{t.gallery.heading}</h3>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          {t.gallery.desc}
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <CategoryCard key={index} category={cat} swipeHint={t.gallery.swipeHint} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category, swipeHint }: { category: any, swipeHint: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % category.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + category.images.length) % category.images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      nextImage();
    } else if (diff < -50) {
      prevImage();
    }
    setTouchStart(null);
  };

  return (
    <div className="group flex flex-col h-full">
      <div 
        className="relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-800 touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img 
          src={category.images[currentIndex]} 
          alt={`${category.title} ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 lg:group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
          <button 
            onClick={prevImage}
            className="p-2 bg-black/50 text-white hover:bg-gold hover:text-black transition-colors rounded-full pointer-events-auto"
            aria-label="Previous photo"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className="p-2 bg-black/50 text-white hover:bg-gold hover:text-black transition-colors rounded-full pointer-events-auto"
            aria-label="Next photo"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Mobile Navigation Hint (Tap areas) */}
        <div className="absolute inset-0 flex md:hidden pointer-events-none">
          <div className="w-1/2 h-full pointer-events-auto" onClick={() => prevImage()} />
          <div className="w-1/2 h-full pointer-events-auto" onClick={() => nextImage()} />
        </div>

        {/* Interaction Hint Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500">
           <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
              <span className="text-[10px] text-white uppercase tracking-[0.2em]">{swipeHint}</span>
           </div>
        </div>

        {/* Category Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
          <h4 className="text-xl font-serif font-bold text-white mb-2">{category.title}</h4>
          
          {/* Indicators */}
          <div className="flex gap-2 mb-4">
            {category.images.map((_: any, i: number) => (
              <div 
                key={i} 
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-gold w-4' : 'bg-white/30 w-2'
                }`}
              />
            ))}
          </div>
          
          <ul className="text-[10px] text-gold/80 uppercase tracking-widest space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
            {category.photos.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
