import React from 'react';
/* eslint-disable react/jsx-props-no-spreading */
import Layout from './src/components/Layout';

// Pass down state from a reducer
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export default Layout;
