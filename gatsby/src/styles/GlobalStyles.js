import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/global-fonts.css';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`

  *,*:before,*:after {
    box-sizing:border-box;
  }
  html {
    --cadet: #506473; 
    --secodary-cadet: #596D7A;
    --light-grey: #EDEFF1;
    --secondary-light-grey: #C0345E;
    --dark-grey:#19293A;
    --pink: #C0345E;
    --secondary-pink: #C0345E25;
    --black: #000D14;
    --yellow: #fbcf68;
    --white: #fff;
    --grey: #efefef;
    --maxWidth:1920px;
    font-size: 10px;
    font-weight:400;
    background:#fafafa;
  }

  body {
    font-family: 'Open Sans',---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,  'Helvetica Neue', sans-serif;
    font-size:2.1em;
    line-height:1.2;
    padding:0px;
    margin:0px auto;
    max-width: var(--maxWidth);
    
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container-wide {
    ${'' /* padding: 4rem calc((100vw - 10%) / 2); */}
    max-width:90%;
    margin: 0 auto;
    @media screen and (min-width:1500px) {
      ${'' /* padding: 8rem calc((1920px - 1470px) / 2); */}
      max-width: 1470px;

    }
  
  }
  .container-base {
    max-width:90%;
    margin: 0 auto;
      ${'' /* padding: 4rem calc((100vw - 10%) / 2); */}
    @media screen and (min-width:1500px) {
      ${'' /* padding: 8rem calc((1920px - 1360px) / 2); */}
      max-width: 1360px;

    }
  }

  .container-small {
    margin: 0 auto;
    ${'' /* padding: 4rem calc((1920px - 900px) / 2); */}
    max-width: 900px;
  }
  .entry-content {
    max-width: 710px;
    margin: 4rem 0;
      &.centered {
        margin: 4rem auto;
      }
   }

   .centered {
     text-align: center
  
   }

  ${'' /* TYPOGRAPHY */}

  a {
    color: var(--dark-grey);
    font-size: 2rem;
    transition: all 0.25s ease-in-out;
    text-decoration:none;
    line-height: 1.6;
    font-weight: 600;
    position:relative;
    width: max-content;
    &:after {
      position:absolute;
      bottom: -2px;
      left:0px;
      content:'';
      width:100%;
      height:3px;
      background-color:var(--pink);
      transition: transform .25s ease-in-out;
      transition-delay: 40ms;
      @media (min-width: 920px) {
        bottom: -5px;
      }
    }
    &:hover {
      color: var(--pink);
      &:after {
      transition: .5s ease-in-out;
      background-color:var(--dark-grey);
      }
    }
  }

  

  p {
    font-size: 1.6rem;
    font-weight: normal;
    color: var(--cadet);
    line-height: 2.8rem;
    @media (min-width: 920px) {
      font-size: 2.1rem;
      line-height: 2;
    }
  }

  h1,h2 {
    font-family: 'Poppins', sans-serif;
    color: var(--dark-grey);
    font-weight:500;
    span {
      display: block;
      color: var(--cadet);
    }
  }

  h2 {
    @media (min-width: 920px) {
      font-size:4.8rem;
    }
  }
  h3 {
    @media (min-width: 920px) {
      font-size:30px;
    }
  }
  h4 {
    color: var(--black);
    @media (min-width: 920px) {
      font-size:16px;
    }
  }
 
  ul,ol {
    padding-left:0px;
    list-style:none;
  }

   .gatsby-image-wrapper  {
    height:100%;
    width:100%;
     img[src*=base64\\,] {
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
      } 
   }


  }
`;

export default GlobalStyles;
