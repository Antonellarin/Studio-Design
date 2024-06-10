import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <motion.section 
      className="flex flex-col items-center justify-center py-16 bg-black text-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">¿Listo para empezar?</h2>
      <motion.button 
        className="px-4 py-2 bg-customPink text-white rounded"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Contáctanos
      </motion.button>
    </motion.section>
  );
}

export default CallToAction;
