import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className='logo-container'>LOGO</div>
            <ul className='list-container'>
                <li className='list-container__li'>Inicio</li>
                <li className='list-container__li'>Nosotros</li>
                <li className='list-container__li'>Novedades</li>
                <li className='list-container__li'>Testimonios</li>
                <li className='list-container__li'>Contacto</li>
                <li className='list-container__li'>Contribuye</li>
            </ul>
            <div className='circles-container'>CIRULOS</div>
            <div className='copyright-container'>
                <p>2022 by Alkemy. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;