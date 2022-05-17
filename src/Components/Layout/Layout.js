import React from 'react';
import Header from '../Header/Header';
import Footer from '../Frontoffice/Footer/Footer';

const Layout = ({children}) => {
  return (
    <>
      <main>
        { children }
      </main>
      <Footer/>
    </>
  )
}

export default Layout