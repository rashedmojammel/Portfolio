import Loader from '@/components/layout/Loader';
import Header from '@/components/layout/Header';
import ScrollProgress from '@/components/layout/ScrollProgress';
import CustomCursor from '@/components/layout/CustomCursor';
import BackToTop from '@/components/layout/BackToTop';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/home/Hero';
import VideoCV from '@/components/sections/VideoCV';
import About from '@/components/sections/About';
import Academic from '@/components/sections/Academic';
import Portfolio from '@/components/sections/Portfolio';
import Skills from '@/components/sections/Skills';
import Certificates from '@/components/sections/Certificates';
import Hobbies from '@/components/sections/Hobbies';
import Contact from '@/components/sections/Contact';

import AIChatWidget from '@/components/ai-chat/AIChatWidget';

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <Header />

      <Hero />
      <VideoCV />
      <About />
      <Academic />
      <Portfolio />
      <Skills />
      <Certificates />
      <Hobbies />
      <Contact />

      <Footer />
      <BackToTop />
      <AIChatWidget />
    </>
  );
}
