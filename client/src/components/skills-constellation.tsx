import { useState } from 'react';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiPython, SiSharp, SiMysql, SiGit, SiGithub, SiNodedotjs, SiDocker, SiAmazonwebservices } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  x: number;
  y: number;
}

const skills: Skill[] = [
  { name: 'React.JS', icon: SiReact, color: 'text-stellar-blue', category: 'frontend', x: 50, y: 30 },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-stellar-blue', category: 'frontend', x: 70, y: 25 },
  { name: 'HTML', icon: SiHtml5, color: 'text-stellar-blue', category: 'frontend', x: 40, y: 50 },
  { name: 'CSS', icon: SiCss3, color: 'text-stellar-blue', category: 'frontend', x: 60, y: 55 },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-stellar-blue', category: 'frontend', x: 80, y: 45 },
  { name: 'Next.JS', icon: SiNextdotjs, color: 'text-stellar-blue', category: 'frontend', x: 85, y: 30 },
  
  { name: 'Python', icon: SiPython, color: 'text-stellar-purple', category: 'backend', x: 20, y: 30 },
  { name: 'C#', icon: SiSharp, color: 'text-stellar-purple', category: 'backend', x: 10, y: 70 },
  
  { name: 'SQL', icon: SiMysql, color: 'text-stellar-cyan', category: 'database', x: 50, y: 80 },
  
  { name: 'Git', icon: SiGit, color: 'text-orange-400', category: 'tools', x: 80, y: 70 },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', category: 'tools', x: 30, y: 20 },
];

const connections = [
  [0, 1], [0, 2], [0, 3], 
  [1, 4], [1, 5], 
  [2, 3], [3, 4],
  [4, 5], 
  
  [6, 0], [6, 1], 
  [7, 2], [7, 8], 
  
  [8, 0], [8, 6], [8, 7],
  
  [9, 0], [9, 5], [9, 8], 
  [10, 1], [10, 6], 
];

export default function SkillsConstellation() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const getConnectedSkills = (skillIndex: number): number[] => {
    return connections
      .filter(([a, b]) => a === skillIndex || b === skillIndex)
      .map(([a, b]) => a === skillIndex ? b : a);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-stellar" data-testid="skills-title">
          Constelação de Habilidades
        </h2>
        
        {/* Network Constellation Layout */}
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] mx-auto max-w-6xl overflow-visible" data-testid="skills-constellation">
          {/* SVG for constellation lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {connections.map(([startIndex, endIndex], index) => {
              const startSkill = skills[startIndex];
              const endSkill = skills[endIndex];
              const isHighlighted = hoveredSkill !== null && 
                (hoveredSkill === startIndex || hoveredSkill === endIndex || 
                 getConnectedSkills(hoveredSkill).includes(startIndex) || 
                 getConnectedSkills(hoveredSkill).includes(endIndex) || 
                 getConnectedSkills(startIndex).includes(hoveredSkill) || 
                 getConnectedSkills(endIndex).includes(hoveredSkill));
              
              return (
                <line
                  key={index}
                  x1={startSkill.x}
                  y1={startSkill.y}
                  x2={endSkill.x}
                  y2={endSkill.y}
                  className={`constellation-line ${isHighlighted ? 'opacity-100 stroke-white' : 'opacity-30 stroke-white'}`}
                  strokeWidth={isHighlighted ? 1.5 : 0.2}
                />
              );
            })}
          </svg>
          
          {/* Skill Nodes */}
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isHighlighted = hoveredSkill !== null && 
              (hoveredSkill === index || getConnectedSkills(hoveredSkill).includes(index));
            
            return (
              <div
                key={skill.name}
                className="skill-node absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <div className={`glassmorphism rounded-full w-16 h-16 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  skill.category === 'frontend' ? 'bg-stellar-blue/20 border-2 border-stellar-blue' :
                  skill.category === 'backend' ? 'bg-stellar-purple/20 border-2 border-stellar-purple' :
                  skill.category === 'database' ? 'bg-stellar-cyan/20 border-2 border-stellar-cyan' :
                  'bg-gradient-to-br from-orange-400/20 to-green-400/20 border-2 border-orange-400'
                } ${isHighlighted ? 'scale-110 shadow-lg' : ''}`}
                style={isHighlighted ? { 
                  boxShadow: skill.category === 'frontend' ? '0 0 20px rgba(59, 130, 246, 0.6)' :
                            skill.category === 'backend' ? '0 0 20px rgba(139, 92, 246, 0.6)' :
                            skill.category === 'database' ? '0 0 20px rgba(6, 182, 212, 0.6)' :
                            '0 0 20px rgba(251, 146, 60, 0.6)'
                } : {}}>
                  <IconComponent className={`text-xl ${skill.color}`} />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Skills Legend */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto" data-testid="skills-legend">
          <div className="text-center">
            <div className="w-4 h-4 bg-stellar-blue rounded-full mx-auto mb-2"></div>
            <span className="text-sm text-gray-300">Frontend</span>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-stellar-purple rounded-full mx-auto mb-2"></div>
            <span className="text-sm text-gray-300">Backend</span>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-stellar-cyan rounded-full mx-auto mb-2"></div>
            <span className="text-sm text-gray-300">Database</span>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-green-400 rounded-full mx-auto mb-2"></div>
            <span className="text-sm text-gray-300">Ferramentas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
