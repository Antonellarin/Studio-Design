import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-black text-center text-white px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Servicios</h2>
      <div className="flex flex-wrap justify-center">
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Diseño Gráfico</h3>
          <p className="text-base">Logotipos, tarjetas de presentación, folletos y más.</p>
        </motion.div>
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Branding</h3>
          <p className="text-base">Estrategias de marca, identidad visual y manuales de marca</p>
        </motion.div>
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Desarrollo web</h3>
          <p className="text-base">Desarrollo y diseño de sitios web responsivos y optimizados.</p>
        </motion.div>
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Desarrollo Web con WordPress</h3>
          <p className="text-base">Creación y personalización de sitios web utilizando WordPress</p>
        </motion.div>
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Publicidad Digital</h3>
          <p className="text-base">Campañas publicitarias en redes sociales, banners y anuncios</p>
        </motion.div>
        <motion.div 
          className="w-full sm:w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold mb-2">Community Manager</h3>
          <p className="text-base">Gestión de redes sociales y creación de contenido para aumentar tu presencia online.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
