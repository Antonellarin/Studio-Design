import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const instagramLink = 'https://www.instagram.com/aastudio_design/';
const facebookLink = 'https://web.facebook.com/profile.php?id=61556274192453';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center p-6 bg-customPink text-white">
      <div className="text-center sm:text-left">
        <p> AA studio design 2024 &copy; Todos los derechos reservados.</p>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaInstagram size={24} />
        </a>
        <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaFacebook size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
