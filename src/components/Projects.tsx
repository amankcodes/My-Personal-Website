import { Github, ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Space Invaders Video Game',
      description: 'A simple desktop-based arcade-style Space Invaders game built using Java AWT & Swing. Shoot down alien enemies, dodge attacks, and protect your spaceship in this classic remake',
      tech: ['Java', 'Swing', 'GUI', 'CSS', 'GitHub Actions'],
      image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=500&h=300&fit=crop',
      github: 'https://github.com/amankcodes/Space-Invaders.git',
      demo: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'E-Authentication System (FYP)',
      description: 'Secure multi-factor authentication system with OTP and QR code login capabilities for enhanced security.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Email API', 'JWT'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      github: '#',
      demo: '#',
      color: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Bubble Squidder Game',
      description: 'Interactive Java Swing game converted to web-based platform with modern UI and enhanced gameplay.',
      tech: ['Java', 'Swing', 'Spring Boot', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop',
      github: 'https://github.com/BackendbyAman/Bubble-sqidder.git',
      demo: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group hover:scale-105">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-500 flex items-center gap-2"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 flex items-center gap-2"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Eye className="mr-2" size={20} />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

