import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Button from '../components/Button';
import { ArrowDown, FileText, Sparkles, Github } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <AnimatedBackground />
      
      <div className="section-container flex flex-col items-center text-center z-10">
        <div className="animate-reveal mb-4">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-800/30 text-primary-300 text-sm font-medium mb-6">
            Data Scientist & AI Researcher
          </span>
        </div>
        
        <h1 className="animate-reveal text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-150">
          Hi, I'm <span className="gradient-text">Hrushitha Tigulla</span>
          <br />
  Master’s in Computer Science at 
  <br />
  <span className="text-primary-400">UNC Charlotte</span> 
        </h1>
        
        <p className="animate-reveal text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
          Crafting intelligent solutions with Data Science, AI, and impactful research.Turning data into decisions, and ideas into innovation.
        </p>
        
        <div className="animate-reveal flex flex-wrap gap-4 justify-center">
          <Button href="#projects" variant="primary">
            <Sparkles size={18} className="mr-2" />
            View Projects
          </Button>
          <Button href="#about" variant="secondary">
            <ArrowDown size={18} className="mr-2" />
            Learn More
          </Button>
          <Button href="https://github.com/HrushithaTigulla" variant="outline" target="_blank" rel="noopener noreferrer">
            <Github size={18} className="mr-2" />
            GitHub
          </Button>
        </div>
        
        <div className="animate-reveal mt-16">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto animate-float glass-card p-1">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFF2oqo_Q0PEQ/profile-displayphoto-shrink_200_200/B56ZVArfWNGUAc-/0/1740546898834?e=2147483647&v=beta&t=YBKOnh2_Tn4V-k97wN98KtXPjtxlMs2VhWEKNi3BCOc" 
              alt="Hrushitha Goud Tigulla"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;