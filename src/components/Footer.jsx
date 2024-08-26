// import React from 'react';
// import "./footer.css";
// import { footers } from '../data';
// import { NavLink } from 'react-router-dom';


// const Footer = () => {

//   const getActiveClass = ({ isActive }) => (isActive ? 'footer_box active' : 'footer_box');




//   return (
//     <div className="footer_container">
//       <div className="footer_main">
//         {footers.map(({id, name, path, icon}) => (
//           <NavLink 
//             to={path} 
//             className={getActiveClass}
//             key={id}
//           >
//             <img src={icon} alt={name} />
//             <p>{name}</p>
//           </NavLink>
//         ))}  
//       </div>
//     </div>
//   )
// }

// export default Footer;

import React, { useState, useEffect } from 'react';
import "./footer.css";
import { footers } from '../data';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const getActiveClass = ({ isActive }) => (isActive ? 'footer_box active' : 'footer_box');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos < lastScrollPos) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);

  return (
    <div className={`footer_container ${isScrollingUp ? 'hide' : ''}`}>
      <div className="footer_main">
        {footers.map(({ id, name, path, icon }) => (
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
  );
};

export default Footer;
