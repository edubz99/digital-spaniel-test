import styled, { css } from 'styled-components';

const FixedPosition = css`
  @supports (position: fixed) {
    position: fixed;
  }
`;
const NavStyles = styled.nav`
  flex: 0 0 100%;
  @media (min-width: 920px) {
    flex: 0 0 50%;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding-top: 100px;
    @media (min-width: 920px) {
      padding-top: 0px;

      flex-direction: row;
    }
    @media (min-width: 1920px) {
      padding-right: 50px;
    }
    a {
      color: var(--white);

      &:after {
        background-color: var(--white);
        transform: scaleX(0);
        width: 0px;
        margin: 0 auto;
      }
      &:hover {
        &:after {
          transform: scaleX(1);
          width: 100%;
        }
      }
    }
  }
`;
const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  /* height: 50px; */
  z-index: 100;
  margin: 0 auto;
  display: ${({ scrolled }) =>
    scrolled ? 'none !important' : 'inherit !important'};
  transition: background 0.05s linear;

  .header-inner {
    max-width: 1880px;
    /* margin-left: auto; */
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    @media (min-width: 1920px) {
      padding-left: 100px;
    }
  }
  .logo {
    &:after {
      display: none;
    }
  }
`;

const MenuLinkStyles = styled.a`
  &:hover,
  &:focus {
    background: #333;
    text-decoration: underline;
  }

  @media (min-width: 920px) {
    color: #06c;
    border: 0 !important; /* Remove borders from off-canvas styling */
  }
`;

const MenuCloseStyles = styled.a`
  position: absolute;
  right: 20px;
  top: 35px;
  z-index: ${(props) => (props.isOpen ? 1001 : 'initial')};

  &:hover,
  &:focus {
    background: #333;
    text-decoration: underline;
  }
  &:after {
    display: none !important;
  }
  @media (min-width: 920px) {
    display: none !important;
  }
`;

const MenuListStyles = styled.ul`
  ${(props) =>
    props.isOpen &&
    css`
      position: relative;
      z-index: 1000;
    `};

  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  background: #1a1a1a;
  align-self: center;

  @media (min-width: 920px) {
    display: flex;
    padding: 0;
    box-shadow: none;
    height: auto;
    width: auto;
    background: none;
  }
`;

const MenuListItemStyles = styled.li``;

const MenuStyles = styled.nav`
  position: absolute;
  ${FixedPosition};
  display: none;
  left: 0;
  top: -100vh;
  height: 100%;
  overflow-y: scroll;
  overflow-x: visible;
  transition: top 0.3s ease;
  z-index: 999;

  ${(props) =>
    props.isOpen &&
    css`
      display: flex;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      outline: none;
      background: var(--dark-grey);
    `}

  &[aria-expanded="true"] ${MenuCloseStyles} {
    z-index: 1001;
  }

  &[aria-expanded='true'] ${MenuListStyles} {
    display: relative;
    z-index: 1000;
  }

  @media (min-width: 920px) {
    position: relative;
    left: auto;
    top: auto;
    height: auto;
    display: block;
  }

  a {
    display: block;
    padding: 1rem ;
    line-height: 1em;
    font-size: 2rem;
    color: #fff;
    text-decoration: none;

      color: #06c;
      border: 0 !important;

      &:hover,
      &:focus {
        background: none;
        color: var(--pink);
      }
    }
  }
`;

const MenuToggleStyles = styled.a`
  display: inline-block;
  padding: 0.75em 15px;
  line-height: 1em;
  font-size: 1em;
  color: #333;

  &:hover,
  &:focus {
    color: var(--pink);
  }
  &:after {
    display: none !important;
  }
  @media (min-width: 920px) {
    display: none !important;
  }
`;

export {
  NavStyles,
  HeaderStyles,
  MenuCloseStyles,
  MenuStyles,
  MenuListStyles,
  MenuListItemStyles,
  MenuLinkStyles,
  MenuToggleStyles,
};
