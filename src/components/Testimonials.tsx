import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <motion.section 
      className="py-16 bg-black text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">Testimonios</h2>
      <div className="flex flex-wrap justify-center">
        <motion.div 
          className="w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <p className="italic">"Esta empresa transformó nuestro negocio."</p>
          <p className="mt-2 font-semibold">- Cliente Satisfecho</p>
        </motion.div>
        <motion.div 
          className="w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <p className="italic">"El mejor servicio que hemos recibido."</p>
          <p className="mt-2 font-semibold">- Otro Cliente Satisfecho</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
