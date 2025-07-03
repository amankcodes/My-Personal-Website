
import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-teal-500 p-3 rounded-lg mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-orange-500">B.Tech in Computer Science and Engineering</h4>
                <p className="text-gray-300">Dr. A.P.J Abdul Kalam Technical University, Lucknow</p>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>Expected Graduation: 2026</span>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-teal-500 to-orange-500 p-3 rounded-lg mr-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-teal-500">Program Management Intern</h4>
                <p className="text-gray-300">Noida (Remote)</p>
                <div className="flex items-center text-gray-400 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>Dec 2024 – Feb 2025</span>
                </div>
                <ul className="text-gray-400 space-y-2">
                  <li>• Lead generation and client outreach</li>
                  <li>• Product pitching and presentations</li>
                  <li>• Business communication & analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <blockquote className="text-xl italic text-gray-300 mb-4">
                "Code is like humor. When you have to explain it, it's bad."
              </blockquote>
              <p className="text-orange-500 font-semibold">- Cory House</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
