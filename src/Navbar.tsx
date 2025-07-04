import React from 'react';

const Navbar = () => {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-gray-900/80 to-transparent backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-white tracking-wide">Aman.dev</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 font-medium text-sm md:text-base">
          <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition" onClick={() => scrollTo('about')}>
            About Me
          </li>
          <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition" onClick={() => scrollTo('services')}>
            Services
          </li>
          <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition" onClick={() => scrollTo('projects')}>
           Featured Projects
          </li>
          <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition" onClick={() => scrollTo('contact')}>
            Let's Connect
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
