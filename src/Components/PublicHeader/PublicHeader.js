import { Link } from 'react-router-dom'

import '../PublicHeader/PublicHeaderStyles.css'

const PublicHeader = () => {

    return (
        <header className="header-container">
           <div className="container-logo-header">
            <div className="logo-header">
              <div className="container-figures-header">
                <div className="triangle-logo-header"></div>
                <div className="square-logo-header"></div>
                <div className="circle-logo-header"></div>
              </div>
              <div className="name-logo-header">Somos mas</div>
            </div>
           </div>
           <div className="container-list-header">
             <ul className='list-container'>
                <li className='list-container__li'><Link to='/'>Inicio</Link></li>
                <li className='list-container__li'><Link to='/about-us'>Nosotros</Link></li>
                <li className='list-container__li'><Link to='/news'>Novedades</Link></li>
                <li className='list-container__li'><Link to='/testimonials'>Testimonios</Link></li>
                <li className='list-container__li'><Link to='/contact'>Contacto</Link></li>
                <li className='list-container__li'><Link to='/contributes'>Contribuye</Link></li>
             </ul>
           </div>
           <div className="container-buttons-header">
              <Link to='/login'><button className="button-login-header" type="submit">Log in</button></Link>
              <Link to='/register'><button className="button-register-header" type="submit">Registrate</button></Link>
           </div> 

           <nav className="navbar">
            <div className="navbar-container container">
              <input className='input-hamburguer-menu' type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="logo-header">
                <div className="container-figures-header">
                <div className="triangle-logo-header"></div>
                <div className="square-logo-header"></div>
                <div className="circle-logo-header"></div>
              </div>
              </div>
              <ul className="menu-items">
                <li className='list-container__li'><Link to='/'>Inicio</Link></li>
                <li className='list-container__li'><Link to='/about-us'>Nosotros</Link></li>
                <li className='list-container__li'><Link to='/news'>Novedades</Link></li>
                <li className='list-container__li'><Link to='/testimonials'>Testimonios</Link></li>
                <li className='list-container__li'><Link to='/contact'>Contacto</Link></li>
                <li className='list-container__li'><Link to='/contributes'>Contribuye</Link></li>
                <li className='list-container__li'><Link to='/login'><button className="button-login-header" type="submit">Log in</button></Link></li>
                <li className='list-container__li'><Link to='/register'><button className="button-register-header" type="submit">Registrate</button></Link></li>
              </ul>
            </div>
          </nav>
        </header>
    )
}

export default PublicHeader;