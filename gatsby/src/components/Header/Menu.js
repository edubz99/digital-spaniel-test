import React from 'react';
import { Link } from 'gatsby';
import { headerNavData } from '../../data/homepageData';
import {
  NavStyles,
  MenuStyles,
  MenuCloseStyles,
} from '../../styles/HeaderStyles';

function Menu({ isOpen, onClose }) {
  return (
    <MenuStyles className="main-menu" aria-label="Main menu" isOpen={isOpen}>
      <NavStyles isOpen={isOpen}>
        <ul>
          {headerNavData.map((item, idx) => (
            <li key={idx}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </NavStyles>
      <MenuCloseStyles
        href=""
        className="menu-close"
        aria-label="Close main menu"
        onClick={onClose}
        isOpen={isOpen}
      >
        <span className="sr-only">Close main menu</span>
        <svg width="24" height="24">
          <path
            d="M23.314 21.527L13.786 12l9.528-9.527A1.263 1.263 0 0 0 21.527.686L12 10.214 2.473.686A1.263 1.263 0 0 0 .686 2.473L10.214 12 .686 21.527a1.263 1.263 0 0 0 1.787 1.787L12 13.786l9.527 9.528a1.263 1.263 0 0 0 1.787-1.787z"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>
      </MenuCloseStyles>
    </MenuStyles>
  );
}

export default Menu;
