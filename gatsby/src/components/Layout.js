import React from 'react';
import 'normalize.css';
import styled from 'styled-components';

import Header from './Header/Header';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';

const ContentWrapperStyles = styled.div`
  background-color: white;
  padding-top: 0;
`;

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ContentWrapperStyles>{children}</ContentWrapperStyles>
      <Footer />
    </>
  );
}

export default Layout;
