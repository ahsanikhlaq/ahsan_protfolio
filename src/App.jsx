import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Reviews from './components/reviews';
import About from './components/about';
import Contact from './components/contact';
import Footernew from './components/footer-new'
import Services from './components/services';
import './App.css'

function App() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <Hero/>
      <Skills/>
      <Projects/>
      <Reviews/>
       <Services/>
      <About/>
      <Contact/>
      <Footernew/>
     
     
    </div>
  );
}

export default App
