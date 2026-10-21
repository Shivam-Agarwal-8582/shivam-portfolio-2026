import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProjects } from './components/FeaturedProjects';
import { MoreProjects } from './components/MoreProjects';
import { Skills } from './components/Skills';
import { CodingProfiles } from './components/CodingProfiles';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAFAFF] dark:bg-[#0B0F17] text-[#171717] dark:text-[#F3F4F6] transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <FeaturedProjects />
          <MoreProjects />
          <Skills />
          <CodingProfiles />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
