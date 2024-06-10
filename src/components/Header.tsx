import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="flex justify-between items-center p-6 bg-customPink text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="text-2xl font-bold">AA Studio Design</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Inicio</a></li>
          <li><a href="#about" className="hover:underline"> Nosotros</a></li>
          <li><a href="#features" className="hover:underline"> Servicios</a></li>
          <li><a href="#testimonials" className="hover:underline">Testimonios</a></li>
          <li><a href="#cta" className="hover:underline">Contactanos</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;