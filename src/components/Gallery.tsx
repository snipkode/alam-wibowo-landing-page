const Gallery = () => {
  const categories = [
    {
      title: 'Professional Look',
      photos: ['Corporate Portrait', 'Business Suit', 'Formal Pose', 'Office Executive'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Character Look',
      photos: ['Boss Character', 'Lawyer Character', 'Corporate Manager', 'Government Officer'],
      image: 'https://images.unsplash.com/photo-1519085115970-36002951576f?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Casual Look',
      photos: ['Smart Casual', 'Lifestyle', 'Friendly Smile', 'Outdoor Portrait'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Full Body Look',
      photos: ['Standing Pose', 'Walking Pose', 'Action Pose', 'Character Pose'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer">
              <img 
                src={cat.image} 
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 opacity-100 group-hover:opacity-100">
                <h4 className="text-xl font-serif font-bold text-white mb-2">{cat.title}</h4>
                <ul className="text-xs text-gold/80 uppercase tracking-widest space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {cat.photos.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
