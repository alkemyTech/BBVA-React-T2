import React from 'react';
<<<<<<< HEAD
//import Header from '../Frontoffice/Header/Header';
=======
import Header from '../Header/Header';
>>>>>>> 5b6059169cf398c31f87a04f49fd6b24054e47a8
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