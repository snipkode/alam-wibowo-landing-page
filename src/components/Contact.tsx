import { Camera, Video, MessageCircle, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-cinematic-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Inquiry</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Let's Collaborate</h3>
            <p className="text-neutral-400 text-lg mb-8 max-w-md">
              Available for commercials, digital ads, corporate videos, films, television, and presenter roles.
            </p>
            
            <div className="space-y-6">
              <a href="https://wa.me/628123456789" className="flex items-center gap-4 text-neutral-300 hover:text-gold transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500">WhatsApp</p>
                  <p className="text-lg font-medium">+62 8xx xxxx xxxx</p>
                </div>
              </a>
              
              <a href="mailto:your@email.com" className="flex items-center gap-4 text-neutral-300 hover:text-gold transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500">Email</p>
                  <p className="text-lg font-medium">your@email.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500">Location</p>
                  <p className="text-lg font-medium">Bandung / Jakarta, ID</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cinematic-gray p-12 rounded-sm border border-white/5 flex flex-col justify-center text-center lg:text-left">
            <h4 className="text-white font-serif text-2xl mb-6">Booking Now</h4>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              For casting inquiries, collaborations, and commercial projects, please contact me through WhatsApp or email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/628123456789" 
                className="flex-1 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm text-center hover:bg-white transition-colors"
              >
                Book via WhatsApp
              </a>
              <a 
                href="#" 
                className="flex-1 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm text-center hover:border-gold hover:text-gold transition-colors"
              >
                Download Portfolio
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-serif font-bold text-gold tracking-tighter">
            ALAM WIBOWO
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Camera size={20} /></a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Video size={20} /></a>
          </div>
          
          <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">
            © 2026 ALAM WIBOWO • ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
