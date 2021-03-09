import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

export const FooterStyles = styled.footer`
  background: var(--light-grey);
  .container-wide {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    p {
      font-size: 2.1rem;
      font-weight: 500;
      color: #50647380;
      letter-spacing: 0.53px;
    }
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="container-wide">
        <p>
          Copyright © {new Date().getFullYear()} Digital Spaniel 2019. All
          rights reserved.
        </p>
        <SocialIcons />
      </div>
    </FooterStyles>
  );
}

export default Footer;
