import './PublicHeaderStyles.css';
import { Link } from 'react-router-dom'

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
                <li className='list-container__li'><Link to='/Nosotros'>Nosotros</Link></li>
                <li className='list-container__li'><Link to='/Novedades'>Novedades</Link></li>
                <li className='list-container__li'><Link to='/Testimonios'>Testimonios</Link></li>
                <li className='list-container__li'><Link to='/Contacto'>Mi Contacto</Link></li>
                <li className='list-container__li'><Link to='/Contribuye'>Contribuye</Link></li>
             </ul>
           </div>
           <div className="container-buttons-header">
            <button className="button-login-header" type="submit">Log in</button>
            <button className="button-register-header" type="submit">Registrate</button>
           </div> 

           <nav class="navbar">
            <div class="navbar-container container">
              <input type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
              <div className="logo-header">
                <div className="container-figures-header">
                <div className="triangle-logo-header"></div>
                <div className="square-logo-header"></div>
                <div className="circle-logo-header"></div>
              </div>
              </div>
              <ul class="menu-items">
                <li className='list-container__li'><Link to='/'>Inicio</Link></li>
                <li className='list-container__li'><Link to='/Nosotros'>Nosotros</Link></li>
                <li className='list-container__li'><Link to='/Novedades'>Novedades</Link></li>
                <li className='list-container__li'><Link to='/Testimonios'>Testimonios</Link></li>
                <li className='list-container__li'><Link to='/Contacto'>Mi Contacto</Link></li>
                <li className='list-container__li'><Link to='/Contribuye'>Contribuye</Link></li>
                <li className='list-container__li'><button className="button-login-header" type="submit">Log in</button></li>
                <li className='list-container__li'><button className="button-register-header" type="submit">Registrate</button></li>
              </ul>
            </div>
          </nav>
        </header>
    )
}

export default PublicHeader;