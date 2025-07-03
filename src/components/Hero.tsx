import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-teal-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-teal-500 p-1 animate-fade-in">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
              <img src="https://i.postimg.cc/QNwPxTHL/Whats-App-Image-2024-09-25-at-14-12-36-c3544c34.jpg" alt="Aman Kumar - Profile Picture" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent animate-fade-in">
          Aman Kumar
        </h1>
        
        <p className="text-xl mb-6 animate-fade-in delay-300 text-emerald-400 font-medium md:text-2xl ">Aspiring Software Engineer | Java | Spring Boot </p>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in delay-500">A passionate software developer with a strong interest in Backend Development. I’m driven by curiosity and a constant desire to learn and grow in the ever-evolving world of technology.</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-700">
          <Button onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
            View Projects
          </Button>
          <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
            Get in Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-1000">
          <a href="https://linkedin.com/in/dev-aman-kr17/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/BackendbyAman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-110">
            <Github size={24} />
          </a>
          <a href="mailto:amankr1705@gmail.com" className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>;
};
export default Hero;
