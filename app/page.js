import AIChatWidget from "../components/ai-chat/AIChatWidget";
import Hero from "../components/home/Hero";
import BackToTop from "../components/layout/BackToTop";
import CustomCursor from "../components/layout/CustomCursor";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Loader from "../components/layout/Loader";
import ScrollProgress from "../components/layout/ScrollProgress";
import About from "../components/sections/About";
import Certificates from "../components/sections/Certificates";
import Contact from "../components/sections/Contact";
import Hobbies from "../components/sections/Hobbies";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";
import VideoCV from "../components/sections/VideoCV";


export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress/>
      <CustomCursor />
      <Header/>

      <Hero />
      <VideoCV />
      <About />
     
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
