const VideoHub = () => {
  return (
    <section id="showreel" className="py-24 bg-cinematic-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Official Showreel */}
          <div>
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Official</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Official Showreel</h3>
            <div className="aspect-video bg-neutral-900 mb-6 relative group overflow-hidden border border-white/5">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
                title="Official Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {['Commercial Acting', 'Dialogue Scenes', 'Corporate Presenter', 'Cinematic Content', 'Character Acting'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-cinematic-gray border border-white/10 text-neutral-400 text-[10px] uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Introduction Video */}
          <div>
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Introduction</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Video Profile</h3>
            <div className="aspect-video bg-neutral-900 mb-6 relative group overflow-hidden border border-white/5">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
                title="Video Profile"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Video Contents</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-neutral-400 text-sm">
                <li>• Self Introduction</li>
                <li>• Close Up / Medium Shot</li>
                <li>• Smile / Serious Expression</li>
                <li>• Sample Dialogue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHub;
