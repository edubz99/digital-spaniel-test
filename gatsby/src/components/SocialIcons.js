import React from 'react';
import styled from 'styled-components';
import { socialsData } from '../data/homepageData';

const SocialsContainer = styled.ul`
  display: flex;
  align-items: baseline;
  li {
    padding: 0 20rem;
  }
`;
const Social = styled.a`
  font-size: 3.5rem;
  color: #9ea9b1;
  &:after {
    display: none;
  }
`;

function SocialIcons() {
  return (
    <SocialsContainer className="socials-container">
      {socialsData.map((social, idx) => (
        <li key={idx}>
          <Social
            href={social.title}
            target="_blank"
            rel="noreferrer"
            title={social.title}
          >
            {social.icon}
          </Social>
        </li>
      ))}
    </SocialsContainer>
  );
}

export default SocialIcons;
