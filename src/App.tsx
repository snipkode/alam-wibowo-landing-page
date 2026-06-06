import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Gallery from './components/Gallery';
import VideoHub from './components/VideoHub';
import Filmography from './components/Filmography';
import Contact from './components/Contact';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-cinematic-black text-neutral-200 selection:bg-gold selection:text-black">
        <Header />
        <main>
          <Hero />
          <Stats />
          <About />
          <VideoHub />
          <Gallery />
          <Filmography />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
