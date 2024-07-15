import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/sublogo.png';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const navbarClasses = visible ? 'container' : 'container hidden';
  const menuClasses = menuOpen ? 'menu open' : 'menu';

  return (
    <nav className={navbarClasses}>
      <Link to="/"><img src={logo} alt="" className='logo' /></Link>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
      <ul className={menuClasses}>
        <li><button className='btn'><Link to="/"><strong>INÍCIO</strong></Link></button></li>
        <li><button className='btn'><Link to="/Serviços"><strong>SERVIÇOS</strong></Link></button></li>
        <li><button className='btn'><Link to="/Contato"><strong>CONTATO</strong></Link></button></li>
        <li><button className='btn'><Link to="/Sobre"><strong>SOBRE NÓS</strong></Link></button></li>
        <li><button className='btn'><Link to="/Blog"><strong> NOSSO BLOG</strong></Link></button></li>
      </ul>    
    </nav>
  );
}

export default Navbar;
