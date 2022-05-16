import React from 'react';
import Header from '../Frontoffice/Header/Header';
import Footer from '../Frontoffice/Footer/Footer';

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <main>
        { children }
      </main>
      <Footer/>
    </>
  )
}

export default Layout