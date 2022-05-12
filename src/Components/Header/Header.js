import { useState } from 'react';
// Material UI components
import MenuIcon from '@mui/icons-material/Menu';

import './Header.css';

export default function Header() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        ((!isClicked) ? setIsClicked(true) : setIsClicked(false))
    }

    return (
        <header className='header-container'>
            <MenuIcon fontSize="large" onClick={handleClick} />
            <img src='/logo.svg' alt='logo-ONG' />
        </header>
    )
}