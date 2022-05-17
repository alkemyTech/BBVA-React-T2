import React from 'react';
import PublicHeader from '../Frontoffice/PublicHeader/PublicHeader'
import Footer from '../Frontoffice/Footer/Footer';

const Layout = ({children}) => {
  return (
    <>
      <PublicHeader/>
      <main>
        { children }
      </main>
      <Footer/>
    </>
  )
}

export default Layout