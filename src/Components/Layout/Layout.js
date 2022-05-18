import React from 'react';
import Header from '../Frontoffice/PublicHeader/PublicHeader';
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