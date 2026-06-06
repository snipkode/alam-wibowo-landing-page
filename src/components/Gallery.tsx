import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const categories = [
    {
      title: 'Professional Look',
      photos: ['Corporate Portrait', 'Business Suit', 'Formal Pose', 'Office Executive'],
      images: [
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519085115970-36002951576f?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
      ]
    },
    {
      title: 'Character Look',
      photos: ['Boss Character', 'Lawyer Character', 'Corporate Manager', 'Government Officer'],
      images: [
        'https://images.unsplash.com/photo-1556157382-97dee2dcb341?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=800&auto=format&fit=crop'
      ]
    },
    {
      title: 'Casual Look',
      photos: ['Smart Casual', 'Lifestyle', 'Friendly Smile', 'Outdoor Portrait'],
      images: [
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop'
      ]
    },
    {
      title: 'Full Body Look',
      photos: ['Standing Pose', 'Walking Pose', 'Action Pose', 'Character Pose'],
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
        <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Portfolio</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Photo Gallery</h3>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Explore the range of professional looks and character portrayals suitable for various production needs.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <CategoryCard key={index} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category }: { category: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % category.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + category.images.length) % category.images.length);
  };

  return (
    <div className="group flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-800">
        <img 
          src={category.images[currentIndex]} 
          alt={`${category.title} ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button 
            onClick={prevImage}
            className="p-2 bg-black/50 text-white hover:bg-gold hover:text-black transition-colors rounded-full"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className="p-2 bg-black/50 text-white hover:bg-gold hover:text-black transition-colors rounded-full"
          >
            <ChevronRight size={20} />
          </button>
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
