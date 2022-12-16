import "./FooterStyles.css";

import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{ color:"#fff", marginRight:"2rem" }}/>
                <div>
                    <p>470 Linden Drive</p>
                    <p>Cambridge, ON-N3H 0L5</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{ color:"#fff", marginRight:"2rem" }}/>
                +1 465-456-4563</h4>  
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem" }}/>
                himani@gmail.com</h4>  
            </div>
        </div>
        <div className='right'>
            <h4>About the us</h4>
            <p>We are group of 3 members created this project 
                based on Portfolio website in React for 
                Trends in web technology course. We enjoyed learning it!!</p>
            <div className="social">
                <FaFacebook size={30} style={{ color:"#fff", marginRight:"1rem" }}/>
                <FaTwitter size={30} style={{ color:"#fff", marginRight:"1rem" }}/>
                <FaLinkedin size={30} style={{ color:"#fff", marginRight:"1rem" }}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
