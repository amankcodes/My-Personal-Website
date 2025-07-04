import  { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-gray-900/80 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1
          className="text-2xl font-bold text-white tracking-wide cursor-pointer"
          onClick={() => scrollTo('hero')}
        >
          aman.dev
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 font-medium text-sm md:text-base">
          <li
            className="text-gray-300 hover:text-orange-400 cursor-pointer transition"
            onClick={() => scrollTo('about')}
          >
            About Me
          </li>
          <li
            className="text-gray-300 hover:text-orange-400 cursor-pointer transition"
            onClick={() => scrollTo('services')}
          >
            Services
          </li>
          <li
            className="text-gray-300 hover:text-orange-400 cursor-pointer transition"
            onClick={() => scrollTo('projects')}
          >
            Featured Projects
          </li>
          <li
            className="text-gray-300 hover:text-orange-400 cursor-pointer transition"
            onClick={() => scrollTo('contact')}
          >
            Let's Connect
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
