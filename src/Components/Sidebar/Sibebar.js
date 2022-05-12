import './Sidebar.css';
import { useState } from 'react';
function Sidebar() {

    const [bool, setBool] = useState(false);

    return ( 
        <>
            <button className="sidebar-menu" onClick={() => setBool(!bool)}>
                { bool || 
                <svg className="sidebar-menu__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                }
                { bool && 
                <svg className="sidebar-menu__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
                }
            </button>
            <ul>
                <li>Usuarios</li>
                <li>Organización</li>
                <li>Miembros</li>
                <li>Actividades</li>
                <li>Testimonios</li>
                <li>Novedades</li>
                <li>Categorías</li>
                <li>Slides</li>
            </ul>
        </>
     );
}

export default Sidebar;