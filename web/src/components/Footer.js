import React from 'react';
import '../styles/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import footer_logo from '../assets/wrenchit.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Wrench-It</p>
      </div>
      <ul className='footer-links'>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
         <img src={FacebookIcon} alt="" />
         </div>
        <div className="footer-icon-container">
         <img src={InstagramIcon} alt="" />
         </div>
        <div className="footer-icon-container">
         <img src={WhatsAppIcon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
