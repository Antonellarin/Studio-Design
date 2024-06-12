import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-black text-center">
      <h2 className="text-4xl font-bold mb-8">Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <motion.div 
       id="features"
          className="p-6 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Diseño Gráfico</h3>
          <p className="text-lg">Logotipos, tarjetas de presentación, folletos y más.</p>
        </motion.div>
        <motion.div 
          className="p-6 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Branding</h3>
          <p className="text-lg">Estrategias de marca, identidad visual y manuales de marca</p>
        </motion.div>
        <motion.div 
          className="p-6 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Desarrollo web</h3>
          <p className="text-lg">Desarrollo y diseño de sitios web responsivos y optimizados.</p>
        </motion.div>
        <motion.div 
          className="p-6 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Desarrollo Web con WordPress</h3>
          <p className="text-lg">Creación y personalización de sitios web utilizando WordPress</p>
        </motion.div>
        <motion.div 
          className="p-6 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Publicidad Digital</h3>
          <p className="text-lg">Campañas publicitarias en redes sociales, banners y anuncios</p>
        </motion.div>
        <motion.div 
          className="p-6 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Community Manager</h3>
          <p className="text-lg">Gestión de redes sociales y creación de contenido para aumentar tu presencia online.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
