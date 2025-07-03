
import React from 'react';
import { Code, Database, Settings, Users } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { category: 'Programming Languages', skills: ['Java', 'C', 'HTML', 'CSS', 'JavaScript'], icon: Code },
    { category: 'Frameworks/Libraries', skills: ['Spring Boot', 'Hibernate', 'Bootstrap'], icon: Settings },
    { category: 'Databases', skills: ['MySQL'], icon: Database },
    { category: 'Tools', skills: ['Git', 'GitHub', 'IntelliJ', 'VS Code', 'Postman'], icon: Settings },
  ];

  const concepts = ['REST APIs', 'JWT', 'OTP', 'CRUD operations'];
  const softSkills = ['Problem-solving', 'Communication', 'Teamwork', 'Fast Learner'];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <div key={index} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-teal-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h4 className="font-semibold text-white text-sm">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Concepts & Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-teal-500 mb-6 flex items-center">
              <Settings className="mr-3" size={24} />
              Key Concepts
            </h3>
            <div className="flex flex-wrap gap-3">
              {concepts.map((concept, index) => (
                <span key={index} className="bg-teal-500/20 text-teal-400 px-4 py-2 rounded-full border border-teal-500/30 hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-default">
                  {concept}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-orange-500 mb-6 flex items-center">
              <Users className="mr-3" size={24} />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span key={index} className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full border border-orange-500/30 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
