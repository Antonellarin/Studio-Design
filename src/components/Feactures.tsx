import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-black text-center">
      <h2 className="text-4xl font-bold mb-8">Servicios</h2>
      <div className="flex flex-wrap justify-center">
        <motion.div 
        id="features"
          className="w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Diseño Grafico</h3>
          <p>Logotipos, tarjetas de presentación, folletos y más.</p>
        </motion.div>
        <motion.div 
          className="w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Branding</h3>
          <p>Estrategias de marca, identidad visual y manuales de marca</p>
        </motion.div>
        <motion.div 
          className="w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Desarrollo web</h3>
          <p>Desarrollo y diseño de sitios web responsivos y optimizados.</p>
        </motion.div>
        <motion.div 
          className="w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Desarrollo Web con WordPress</h3>
          <p> Creación y personalización de sitios web utilizando WordPress</p>
        </motion.div>
        <motion.div 
          className="w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Publicidad Digital</h3>
          <p>Campañas publicitarias en redes sociales, banners y anuncios</p>
        </motion.div>
        <motion.div 
          className="w-80 p-4 m-4 bg-customPink rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Community Manager</h3>
          <p>Gestión de redes sociales y creación de contenido para aumentar tu presencia online.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;