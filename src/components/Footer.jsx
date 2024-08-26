import React from 'react';
import "./footer.css";
import { footers } from '../data';
import { NavLink } from 'react-router-dom';


const Footer = () => {

  const getActiveClass = ({ isActive }) => (isActive ? 'footer_box active' : 'footer_box');




  return (
    <div className="footer_container">
      <div className="footer_main">
        {footers.map(({id, name, path, icon}) => (
          <NavLink 
            to={path} 
            className={getActiveClass}
            key={id}
          >
            <img src={icon} alt={name} />
            <p>{name}</p>
          </NavLink>
        ))}  
      </div>
    </div>
  )
}

export default Footer;