import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; 

const instagramLink = 'https://www.instagram.com/aastudio_design/';
const facebookLink = 'https://web.facebook.com/profile.php?id=61556274192453/';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.header 
      className="flex justify-between items-center p-4 bg-customPink text-white fixed w-full top-0 z-15"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="flex items-center space-x-4">
        <img src={logo} alt="AA Studio Design" className="w-10 h-10" />
        <div className="hidden md:flex items-center space-x-4">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-white">
            <FaInstagram size={24} />
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-white">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
      <nav>
        <ul className={`flex space-x-2 sm:space-x-4 ${menuOpen ? 'flex-col' : 'hidden'} md:flex block items-center justify-center`}>
          <li><a href="#home" className="hover:bg-white hover:text-customPink rounded-full py-1 px-3 sm:py-2 sm:px-4 transition duration-300">Inicio</a></li>
          <li><a href="#about" className="hover:bg-white hover:text-customPink rounded-full py-1 px-3 sm:py-2 sm:px-4 transition duration-300">Nosotros</a></li>
          <li><a href="#features" className="hover:bg-white hover:text-customPink rounded-full py-1 px-3 sm:py-2 sm:px-4 transition duration-300">Servicios</a></li>
          <li><a href="#testimonials" className="hover:bg-white hover:text-customPink rounded-full py-1 px-3 sm:py-2 sm:px-4 transition duration-300">Testimonios</a></li>
          <li><a href="#cta" className="hover:bg-white hover:text-customPink rounded-full py-1 px-3 sm:py-2 sm:px-4 transition duration-300">Contáctanos</a></li>
          {/* Logos de redes sociales en el menú hamburguesa */}
          <li className="md:hidden flex space-x-4">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram size={24} />
            </a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-white">
              <FaFacebook size={24} />
            </a>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </motion.header>
  );
}

export default Header;
