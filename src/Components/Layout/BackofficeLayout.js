import React from 'react';
import Header from '../Backoffice/Header/Header'

const BackofficeLayout = ({children}) => {
    return (
      <>
        <Header/>
        <main>
          { children }
        </main>
      </>
    )
  }
  
  export default BackofficeLayout