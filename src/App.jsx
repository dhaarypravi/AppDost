import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from './components/Navbar.jsx';
import Hero from './pages/hero.jsx';
import Services from './pages/Services.jsx';
import Stats from './components/Stats.jsx';
import About from './pages/about.jsx';
import DetailedServices from './components/DetailedServices.jsx'; // Import the new component

import Skill from './pages/Skill.jsx';
import ProjectsSection from './pages/Project.jsx';
import DevelopmentProcess from './pages/Process.jsx';
import Footer from './pages/footer.jsx';

function App() {
  return (
    // Main wrapper: min-h-screen ensures scrolling is possible.
    <div className="relative min-h-screen bg-black"> 
      
      {/* 1. Fixed Navbar */}
      <Navbar />

      {/* 2. Hero Section (h-screen) */}
      <div className="relative w-full h-screen"> 
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/ZQz4lymuZS03qI3B/scene.splinecode" />
        </div>
        <Hero />
      </div>

      {/* 3. Services Section (What We Do) */}
      <Services /> 

      {/* 4. About Section */}
      <About/>
      
      {/* 5. Stats Section */}
      <Stats />

      {/* 6. Detailed Services Section (NEW) */}
      <DetailedServices />

      <Skill />

      <ProjectsSection/>

      <DevelopmentProcess />

      <Footer />

    </div>
  );
}

export default App;
