import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import About from './components/About';
import Services from './components/Services';
import VideoShowcase from './components/VideoShowcase';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ImageCarousel />
        <About />
        <Services />
        <VideoShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
