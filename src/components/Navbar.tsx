import React from 'react';
import { Menu, Palette } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const themes = [
    'retro', 'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
    'synthwave', 'cyberpunk', 'valentine', 'halloween', 'garden',
    'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe',
    'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business',
    'acid', 'lemonade', 'night', 'coffee', 'winter', 'dim', 'nord', 'sunset'
  ];

  const cycleTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'retro';
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    activeSection === item.id ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => scrollToSection('hero')}
          className="btn btn-ghost text-xl font-bold"
        >
          Rohit Kumar
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`btn btn-ghost ${
                  activeSection === item.id 
                    ? 'text-primary font-semibold bg-primary/10' 
                    : 'hover:bg-base-200'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={cycleTheme}
          className="btn btn-primary btn-sm"
        >
          <Palette className="h-4 w-4 mr-2" />
          Theme
        </button>
      </div>
    </div>
  );
};

export default Navbar;