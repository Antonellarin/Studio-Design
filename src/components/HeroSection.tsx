import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../assents/1.png';
import image2 from '../assents/2.png';
import image3 from '../assents/3.png';
import image4 from '../assents/3.png';


const images = [image1, image2, image3, image4];

const HeroSection: React.FC = () => {
  return (
    <motion.section 
      className="flex flex-col items-center justify-center min-h-screen  customPink-100 text-center mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4">Bienvenidos</h1>
      <p className="text-xl mb-8">Tenemos la mejor solución para tu negocio</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover"/>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default HeroSection;
