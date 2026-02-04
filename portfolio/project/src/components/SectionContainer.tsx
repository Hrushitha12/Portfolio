import React, { ReactNode, useEffect, useRef } from 'react';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  id, 
  className = '', 
  children 
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-reveal');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('reveal');
            }, 100 * index);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`section-container ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;