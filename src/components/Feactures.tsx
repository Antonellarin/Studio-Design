import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-black text-center">
      <h2 className="text-4xl font-bold mb-8">Características</h2>
      <div className="flex flex-wrap justify-center">
        <motion.div 
          className="w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Feature 1</h3>
          <p>Descripción de la característica 1.</p>
        </motion.div>
        <motion.div 
          className="w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Feature 2</h3>
          <p>Descripción de la característica 2.</p>
        </motion.div>
        <motion.div 
          className="w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Feature 3</h3>
          <p>Descripción de la característica 3.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;