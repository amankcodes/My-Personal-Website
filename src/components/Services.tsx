
import React from 'react';
import { Server, Globe, Shield, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'Backend Development',
      description: 'RESTful APIs using Java, Spring Boot & MySQL with robust architecture and clean code practices.',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:shadow-orange-500/25'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive UIs with HTML, CSS, JavaScript & Bootstrap for modern, user-friendly interfaces.',
      color: 'from-teal-500 to-teal-600',
      hoverColor: 'hover:shadow-teal-500/25'
    },
    {
      icon: Shield,
      title: 'Authentication Systems',
      description: 'Secure login systems using OTP, QR Code, and JWT for enhanced application security.',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:shadow-purple-500/25'
    },
    {
      icon: Cloud,
      title: 'Deployment',
      description: 'Professional hosting solutions on Render, GitHub Pages, and other modern platforms.',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/25'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-opacity-50 transition-all duration-300 hover:shadow-lg ${service.hoverColor} group hover:scale-105`}>
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl mb-6 inline-block group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
