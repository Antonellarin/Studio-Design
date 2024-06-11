import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const instagramLink = 'https://www.instagram.com/aastudio_design/';
const facebookLink = 'https://web.facebook.com/profile.php?id=61556274192453';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center p-6 bg-customPink text-white">
      <div>
        <p> AA studio design 2024 &copy; Todos los derechos reservados.</p>
        <div className="flex mt-4">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaInstagram size={24} />
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-white mx-">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
