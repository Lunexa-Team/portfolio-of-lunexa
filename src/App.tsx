import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;