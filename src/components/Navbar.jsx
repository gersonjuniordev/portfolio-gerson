import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="w-20"></div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="Sobre" />
            <NavLink to="/portfolio" label="Portfólio" />
            <NavLink to="/interests" label="Interesses" />
            <NavLink to="/contact" label="Contato" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <MobileNavLink to="/" label="Home" onClick={toggleMenu} />
                <MobileNavLink to="/about" label="Sobre" onClick={toggleMenu} />
                <MobileNavLink to="/portfolio" label="Portfólio" onClick={toggleMenu} />
                <MobileNavLink to="/interests" label="Interesses" onClick={toggleMenu} />
                <MobileNavLink to="/contact" label="Contato" onClick={toggleMenu} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <motion.span
        className={`nav-link ${isActive ? 'text-white' : ''}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
      </motion.span>
    </Link>
  );
};

const MobileNavLink = ({ to, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`block py-2 text-center text-lg ${
        isActive ? 'text-white' : 'text-gray-400'
      }`}
    >
      <motion.span
        whileTap={{ scale: 0.95 }}
      >
        {label}
      </motion.span>
    </Link>
  );
};

export default Navbar; 