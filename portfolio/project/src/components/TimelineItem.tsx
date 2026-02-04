import React from 'react';
import { TimelineItem as TimelineItemType } from '../types';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  return (
    <div className="timeline-item animate-reveal">
      <div className="timeline-item-dot"></div>
      <div className={`timeline-item-content ${index % 2 === 0 ? 'sm:ml-auto' : ''}`}>
        <div className="glass-card p-6 h-full">
          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
          <div className="text-sm text-primary-300 mb-4">
            {item.institution} | {item.date}
          </div>
          <p className="text-gray-300 mb-4">{item.description}</p>
          {item.highlights && (
            <ul className="list-disc list-inside text-gray-400">
              {item.highlights.map((highlight, i) => (
                <li key={i} className="mb-1">{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;