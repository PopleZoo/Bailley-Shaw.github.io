import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  // Easter egg: Console message
  useEffect(() => {
    console.log(
      "%cWelcome to my portfolio! 🎮\nTry clicking around, you might find some surprises!",
      "color: #a855f7; font-size: 14px; font-weight: bold;"
    );
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;