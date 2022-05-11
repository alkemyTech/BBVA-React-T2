import { useState } from 'react';
// Material UI components
import MenuIcon from '@mui/icons-material/Menu';

import './Header.css'

export default function Header() {

    const [isMenuIconClicked, setIsMenuIconClicked] = useState(false);

    const handleClick = () => {
        // here we handle button click logic
        ((!isMenuIconClicked) ? setIsMenuIconClicked(true) : setIsMenuIconClicked(false))
    }

    return (
        <header className='header-container'>
            <MenuIcon fontSize="large" onClick={handleClick} />
            <img src='/logo.png' alt='logo-ONG' />
        </header>
    )
}
