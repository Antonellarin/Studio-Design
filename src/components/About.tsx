import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section 
    id="about"
      className="py-16 bg-black text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">Sobre Nosotros</h2>
      <p className="max-w-2xl mx-auto text-lg">
      Somos la mejor solución para tu negocio. Con años de experiencia, nuestro equipo está listo para ayudarte a alcanzar tus metas y hacer realidad tu visión creativa. Ofrecemos una amplia variedad de servicios que te permitirán llevar tu negocio al siguiente nivel.
      </p>
    </motion.section>
  );
}

export default About;
