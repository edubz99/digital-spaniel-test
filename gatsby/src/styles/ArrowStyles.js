import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Arrow = styled.a`
  padding: 18px 26px;
  background: var(--dark-grey);
  color: var(--white);
  cursor: pointer;
  background: ${({ light }) => (light ? 'white' : 'var(--dark-grey)')};
  &:first-of-type {
    margin-right: 30px;
  }
  &:after {
    display: none;
  }
  svg {
    color: ${({ light }) => (light ? 'var(--dark-grey)' : 'white')};
  }
`;

function ArrowStyles({ prev, next, light }) {
  return (
    <Arrow light={light}>
      <FontAwesomeIcon icon={next ? faChevronRight : faChevronLeft} />
    </Arrow>
  );
}

export default ArrowStyles;
