import React from 'react';
import github from '../assets/github-142-svgrepo-com.svg'
import swagger from '../assets/swagger-svgrepo-com.svg'
import status from '../assets/status-up-svgrepo-com.svg'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Douglas Larré</p>
      <a href="https://github.com/DevLarre" target="_blank" rel="noopener noreferrer"><img src={github} alt="email" className="icon_footer" /></a>
      <a href="https://teste-api-deploy-render.onrender.com/swagger-ui/index.html#/user-controller/getAndSaveUser" target="_blank" rel="noopener noreferrer"><img src={swagger} alt="email" className="icon_footer" /></a>
      <a href="https://stats.uptimerobot.com/28SzajlRjl" target="_blank" rel="noopener noreferrer"><img src={status} alt="email" className="icon_footer" /></a>
    </footer>
  );
};

export default Footer;
