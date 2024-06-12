import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const HeroSection: React.FC = () => {
  return (
    <motion.section 
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-customPink-100 text-center mt-24 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Bienvenidos</h1>
      <p className="text-lg sm:text-xl mb-8">Tenemos la mejor solución para tu negocio</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
