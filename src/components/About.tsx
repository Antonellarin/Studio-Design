import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section 
      className="py-16 bg-black text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">Sobre Nosotros</h2>
      <p className="max-w-2xl mx-auto text-lg">
        Somos una empresa dedicada a ofrecer las mejores soluciones para tu negocio. Con años de experiencia, nuestro equipo está listo para ayudarte a alcanzar tus metas.
      </p>
    </motion.section>
  );
}

export default About;
