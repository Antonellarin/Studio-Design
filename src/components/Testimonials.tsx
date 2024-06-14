import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <motion.section 
      id="testimonials"
      className="py-16 bg-black text-center text-white px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Testimonios</h2>
      <div className="flex flex-wrap justify-center">
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <p className="italic">"Excelente trabajo "</p>
          <p className="mt-2 font-semibold">- Cliente Satisfecho</p>
        </motion.div>
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <p className="italic">"Comprendio mis ideas al 100%, lo super recomiendo "</p>
          <p className="mt-2 font-semibold">- Cliente Satisfecho</p>
        </motion.div>
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <p className="italic">"Muy satisfecha con mi producto "</p>
          <p className="mt-2 font-semibold">- Cliente Satisfecho</p>
        </motion.div>
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <p className="italic">"Trabajo hace años con Anto, siempre capta mis ideas y ayuda con el crecimiento de mi negocio "</p>
          <p className="mt-2 font-semibold">- Cliente Satisfecho</p>
        </motion.div>
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <p className="italic">"Super recomendable "</p>
          <p className="mt-2 font-semibold">- Cliente Satisfecho</p>
        </motion.div>
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <p className="italic">"Atencion 100% personalizada y super responsable"</p>
          <p className="mt-2 font-semibold">-  Cliente Satisfecho</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
