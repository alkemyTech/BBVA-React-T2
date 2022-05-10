import { useEffect, useState } from 'react';
import './Footer.css';
import axios from 'axios';
import {ReactComponent as LogoFacebook} from '../../assets/facebook.svg';
import {ReactComponent as LogoInstagram} from '../../assets/instagram.svg';
import {ReactComponent as LogoTwitter} from '../../assets/twitter.svg';
import {ReactComponent as LogoLinkedIn} from '../../assets/linkedin.svg';
import {ReactComponent as LogoOng} from '../../assets/ong.svg';

const Footer = () => {
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [linkedin, setLinkedIn] = useState('');
    const [twitter, setTwtitter] = useState('');

    useEffect (() => {
        const getData = async () => {
            try {
                let res = await axios.get('https://ongapi.alkemy.org/api/organization');
                setInstagram(res.data.data.instagram_url)
                setFacebook(res.data.data.facebook_url)
                setLinkedIn(res.data.data.linkedin_url)
                setTwtitter(res.data.data.twitter_url)
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [])


    return (
        <footer className="footer-container">
            <div className='logo-container'>
                <hr className="footer-container__hr"/>
                <LogoOng className='logo-container__svg'/>
                <hr className="footer-container__hr"/>
            </div>
            <ul className='list-container'>
                <li className='list-container__li'>Inicio</li>
                <li className='list-container__li'>Nosotros</li>
                <li className='list-container__li'>Novedades</li>
                <li className='list-container__li'>Testimonios</li>
                <li className='list-container__li'>Contacto</li>
                <li className='list-container__li'>Contribuye</li>
            </ul>
            <hr className="footer-container__hr"/>
            <div className='socialmedia-container'>
                <a target="_blank" href={instagram} className='socialmedia-container__a'>
                    <LogoInstagram className='socialmedia-container__a-svg'/>
                </a>
                <a target="_blank" href={facebook} className='socialmedia-container__a'>
                    <LogoFacebook />
                </a>         
                <a target="_blank" href={twitter} className='socialmedia-container__a'>
                    <LogoTwitter />
                </a>
                <a target="_blank" href={linkedin} className='socialmedia-container__a'> 
                    <LogoLinkedIn />
                </a>
            </div>
            <div className='copyright-container'>
                <p>2022 by Alkemy. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;