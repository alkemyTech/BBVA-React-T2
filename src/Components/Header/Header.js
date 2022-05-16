import { useState } from 'react';
// Material UI components
import MenuIcon from '@mui/icons-material/Menu';

import './Header.css';

export default function Header() {

    const [isClicked, setIsClicked] = useState(false);

    const toggle = () => setIsClicked(!isClicked)

    return (
        <header className='header-container'>
            <MenuIcon fontSize="large" onClick={toggle} />
            <img src='/logo.svg' alt='logo-ONG' />
        </header>
    )
}
