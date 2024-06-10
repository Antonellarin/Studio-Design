import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Feactures';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;