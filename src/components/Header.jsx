import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between shadow-sm bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-rose-500 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-white text-xl font-bold">🖥️</span>
        </div>
        <span className="text-2xl font-bold text-blue-900">CDteck</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8 text-blue-900 font-medium">
        <Link to="/ " className="hover:text-rose-500">Home</Link>
        <Link to="/about" className="hover:text-rose-500">About</Link>
       <Link to="/services" className="hover:text-rose-500">Our Services</Link>

        
        <Link to="/contact" className="hover:text-rose-500">Contact</Link>
        
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-blue-900 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden text-blue-900 font-medium z-40">
    <Link to="/" onClick={toggleMenu} className="hover:text-rose-500">Home</Link>
    <Link to="/about" onClick={toggleMenu} className="hover:text-rose-500">About</Link>
    <Link to="/services" onClick={toggleMenu} className="hover:text-rose-500">Our Services</Link>
    <Link to="/contact" onClick={toggleMenu} className="hover:text-rose-500">Contact</Link>
    <Link
      to="/contact"
      onClick={toggleMenu}
      className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-md transition"
    >
      Get In Touch
    </Link>
  </div>
      )}
    </header>
  );
};

export default Header;
