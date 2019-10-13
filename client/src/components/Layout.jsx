import React from 'react';
import Nav from './Nav';

export default function Layout({ navTitle, children, history }) {
    return (
    <>
      <Nav navTitle={navTitle} history={history} />
      {children}
    </>
  );
}