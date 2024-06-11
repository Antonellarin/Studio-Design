import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../assents/logo.png'; 

const instagramLink = 'https://www.instagram.com/aastudio_design/';
const facebookLink = 'https://web.facebook.com/profile.php?id=61556274192453/';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="flex justify-between items-center p-6 bg-customPink text-white fixed w-full top-0 z-15"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="flex items-center">
        <img src={logo} alt="AA Studio Design" className="w-10 h-10 mr-2" />
        <div className="flex items-center">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaInstagram size={24} />
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:bg-white hover:text-customPink rounded-full py-2 px-4 transition duration-300">Inicio</a></li>
          <li><a href="#about" className="hover:bg-white hover:text-customPink rounded-full py-2 px-4 transition duration-300">Nosotros</a></li>
          <li><a href="#services" className="hover:bg-white hover:text-customPink rounded-full py-2 px-4 transition duration-300">Servicios</a></li>
          <li><a href="#testimonials" className="hover:bg-white hover:text-customPink rounded-full py-2 px-4 transition duration-300">Testimonios</a></li>
          <li><a href="#cta" className="hover:bg-white hover:text-customPink rounded-full py-2 px-4 transition duration-300">Contáctanos</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;
