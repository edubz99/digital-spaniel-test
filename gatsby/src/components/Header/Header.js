import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Menu from './Menu';
import { MenuToggleStyles, HeaderStyles } from '../../styles/HeaderStyles';
import logo from '../../assets/images/digital_spaniel-logo.png';

function Header() {
  const [isOpen, toggleMenuState] = useState(false);
  const [scrolled, setScrolled] = useState('');
  const toggleMenu = (event) => {
    event.preventDefault();
    toggleMenuState(!isOpen);
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled('');
      }
    });
  });

  return (
    <HeaderStyles scrolled={scrolled}>
      <div className="header-inner">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />{' '}
        </Link>
        <MenuToggleStyles
          href=""
          aria-label="Open main menu"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg height="32px" viewBox="0 0 32 32" width="32px">
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
          </svg>
        </MenuToggleStyles>
        <Menu onClose={toggleMenu} isOpen={isOpen} />
      </div>
    </HeaderStyles>
  );
}

export default Header;
