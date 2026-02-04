import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import { educationTimeline } from '../data/portfolioData';

const AboutSection: React.FC = () => {
  return (
    <SectionContainer id="about">
      <SectionTitle 
        title="About Me" 
        subtitle="My educational background and passion for AI and Data Science"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="animate-reveal glass-card p-6 h-full">
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Background</h3>
            
            <p className="text-gray-300 mb-4">
  I'm a Data Scientist and AI Researcher pursuing my Master’s in Computer Science with a concentration in Data Science at UNC Charlotte, maintaining a 4.0 GPA and a strong foundation in big data, visual analytics, and software systems.
</p>

<p className="text-gray-300 mb-4">
  I hold a Bachelor's degree in Computer Science with a specialization in Artificial Intelligence and Machine Learning, where I gained hands-on experience with deep learning, computer vision, and web programming projects.
</p>

<p className="text-gray-300 mb-4">
  My recent internship at Tata Consultancy Services allowed me to work on fine-tuning large language models like GPT-4All, where I designed and tested over 50 prompts, achieving a 7% improvement in model accuracy.
</p>

<p className="text-gray-300 mb-4">
  I have published research in IEEE and international journals on machine learning in agriculture and big data applications in healthcare, with a focus on real-world impact, scalability, and responsible AI practices.
</p>

<p className="text-gray-300">
  Beyond academics, I’ve led social impact initiatives as Vice President of Women Empowerment at Street Cause, overseeing $10K+ in fundraising and managing 200+ members while driving technical workshops and outreach events.
</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 animate-reveal gradient-text">Education</h3>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {educationTimeline.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;