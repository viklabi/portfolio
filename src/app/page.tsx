import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Interests } from '@/components/sections/Interests';
import { TechStack } from '@/components/sections/TechStack';
import { Journey } from '@/components/sections/Journey';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Interests />
        <TechStack />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home