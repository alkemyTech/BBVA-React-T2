import { useHistory } from "react-router-dom";
import React from 'react';

import './Donation.css';

const Donation = (props) => {
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        let monto = parseInt(prompt('cuanto dinero desea enviar?'));
        history.push({
            pathname: '/gracias',
            state: { contribution: monto}
        });
    }

    return (
        <div className='donation-container'>
            <h1 className='donation-container-h1'>{props.message}</h1>
            <button className='donation-container-button' type='submit' onClick={handleClick}>
                contribuir
            </button>
        </div>
    )
}


export default Donation;