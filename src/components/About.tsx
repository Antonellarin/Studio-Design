import React from 'react';
import { motion } from 'framer-motion';
import logoempr from '../assets/Logo empresa.svg';

const About: React.FC = () => {
  return (
    <motion.section 
      id="about"
      className="py-16 bg-black text-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">Sobre Nosotros</h2>
      <p className="max-w-2xl mx-auto text-lg mb-8 px-4 sm:px-6 lg:px-8">
        Somos la mejor solución para tu negocio. Con años de experiencia, nuestro equipo está listo para ayudarte a alcanzar tus metas y hacer realidad tu visión creativa. Ofrecemos una amplia variedad de servicios que te permitirán llevar tu negocio al siguiente nivel.
      </p>
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <img src={logoempr} alt="Nosotros" className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded shadow-lg" />
      </div>
    </motion.section>
  );
}

export default About;
