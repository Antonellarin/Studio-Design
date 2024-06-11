import React from 'react';
import { motion } from 'framer-motion';


const whatsappNumber = '3548500674';


const CallToAction: React.FC = () => {

    const whatsappLink = `https://wa.me/${whatsappNumber}`;
  return (
    <motion.section 
    id="cta"
      className="flex flex-col items-center justify-center py-16 bg-black text-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">¿Listo para empezar?</h2>
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-4 py-2 bg-customPink text-white rounded"
      >
        Contáctanos
      </a>
    </motion.section>
  );
}

export default CallToAction;
