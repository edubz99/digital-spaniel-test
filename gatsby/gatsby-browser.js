import React from 'react';
import Layout from './src/components/Layout';

// Passing down state from a reducer (high level state management)
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
