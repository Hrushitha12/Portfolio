import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import PublicationsSection from './sections/PublicationsSection';
import LeadershipSection from './sections/LeadershipSection';
import ContactSection from './sections/ContactSection';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.animate-reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('reveal');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />  
        <ProjectsSection />
        <ExperienceSection />
        <PublicationsSection />
        <SkillsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;