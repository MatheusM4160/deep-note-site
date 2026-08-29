import { useState, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import VideoSection from './components/VideoSection/VideoSection';
import Problem from './components/Problem/Problem';
import Solution from './components/Solution/Solution';
import AISection from './components/AISection/AISection';
import Features from './components/Features/Features';
import Audience from './components/Audience/Audience';
import Differentiators from './components/Differentiators/Differentiators';
import HowItWorks from './components/HowItWorks/HowItWorks';
import About from './components/About/About';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main id="topo">
        <Hero />
        <VideoSection />
        <Problem />
        <Solution />
        <AISection />
        <Features />
        <Audience />
        <Differentiators />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;