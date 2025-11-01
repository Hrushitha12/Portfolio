import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <SectionContainer id="contact">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="Have a project in mind or want to collaborate? Let's talk!"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="glass-card p-6 mb-6 animate-reveal">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Let's work together
            </h3>
            
            <p className="text-gray-300 mb-8">
              I'm currently available for freelance work, research collaborations, 
              and full-time opportunities in data science and AI. If you have a project 
              that needs expertise in these areas, or if you just want to say hi, 
              feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={20} className="text-primary-400 mr-4" />
                <a href="mailto:htigulla@charlotte.edu" className="text-gray-300 hover:text-white transition-colors">
                  htigulla@charlotte.edu
                </a>
              </div>
              
              <div className="flex items-center">
                <MapPin size={20} className="text-primary-400 mr-4" />
                <span className="text-gray-300">
                  Charlotte, North Carolina
                </span>
              </div>
              
              <div className="flex items-center">
                <Clock size={20} className="text-primary-400 mr-4" />
                <span className="text-gray-300">
                  Mon - Fri: 9am - 6pm EST
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <ContactForm />
      </div>
    </SectionContainer>
  );
};

export default ContactSection;