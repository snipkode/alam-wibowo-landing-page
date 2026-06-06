import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Gallery from './components/Gallery';
import VideoHub from './components/VideoHub';
import Filmography from './components/Filmography';
import Contact from './components/Contact';

function App() {
  return (
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
  );
}

export default App;
