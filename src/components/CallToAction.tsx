import React from 'react';
import { motion } from 'framer-motion';

const whatsappNumber = '3548500674';

const CallToAction: React.FC = () => {
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.section 
      id="cta"
      className="flex flex-col items-center justify-center py-16 bg-black text-white text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para empezar?</h2>
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 bg-customPink text-white rounded-full text-lg md:text-xl transition duration-300 ease-in-out hover:bg-white hover:text-customPink"
      >
        Contáctanos
      </a>
    </motion.section>
  );
}

export default CallToAction;
