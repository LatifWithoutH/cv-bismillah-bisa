import React from 'react';

// Import assets
import BlenderIcon from '../assets/blender-2.svg';
import JavaIcon from '../assets/java-4.svg';
import CapcutIcon from '../assets/capcut-3.svg';
import CanvaIcon from '../assets/canva-wordmark-2.svg';
import ReactIcon from '../assets/react.svg';
import OpenToonzIcon from '../assets/OpenToonz_logo.svg';

const Skills = ({ data }) => {
  // Map skill names to icons
  const getSkillIcon = (skillName, iconUrl) => {
    const iconMap = {
      '3D Modeling (Blender)': BlenderIcon,
      'Java Programming': JavaIcon,
      'Digital Content Creation': CanvaIcon,
      'Dakwah & Kajian Keislaman': CapcutIcon,
      'Web Design': ReactIcon,
      'Animating': OpenToonzIcon
    };
    
    // Prioritize direct mapping, fallback to iconUrl if provided
    return iconMap[skillName] || iconUrl || ReactIcon;
  };

  return (
    <div className="card">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {data.map((skill) => (
          <div key={skill.id} className="skill-item">
            <div className="skill-header">
              <div className="skill-info">
                <img 
                  src={getSkillIcon(skill.name, skill.icon_url)} 
                  alt={skill.name} 
                  className="skill-icon" 
                />
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.years_of_experience} years experience • {skill.category}</p>
                </div>
              </div>
              {skill.is_main && <span className="badge-main">Main</span>}
            </div>
            
            <div className="progress-container">
              <div className="progress-label">
                <span>{skill.level}</span>
                <span>
                  {skill.level === 'advanced' ? '100%' : 
                   skill.level === 'intermediate' ? '66%' : '33%'}
                </span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ 
                    width: skill.level === 'advanced' ? '100%' : 
                           skill.level === 'intermediate' ? '66%' : '33%' 
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;