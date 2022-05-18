import { useHistory } from "react-router-dom";
import { useState } from 'react'
import React from 'react';

import './Donation.css';

const Donation = (props) => {
    const history = useHistory();

    const [initialValues, setInitialValues] = useState({
        name: '',
        creditNumber: '',
        id: '',
        securityCode: '',
        expiration: ''
    })

    const handleChange = (e) => {
        setInitialValues({...initialValues, [e.target.name] : e.target.value});
    }

    const handleClick = (e) => {
        e.preventDefault();
        let monto = parseInt(prompt('cuanto dinero desea enviar?'));
        history.push({
            pathname: '/gracias',
            state: { contribution: monto}
        });
    }

    return (
        <>
        <div className='donation-container'>
            <h1 className='donation-container-h1'>{props.message}</h1>
            <button className='donation-container-button' type='submit' onClick={handleClick}>
                contribuir
            </button>
        </div>
        <div className='pop-up-container'>
            <form className='pop-up-form'>
                <input className='pop-up-form__input' type='text' name='name' onChange={handleChange} placeholder='nombre'></input>
                <input className='pop-up-form__input' type='text' name='creditNumber' onChange={handleChange} placeholder='numero de tarjeta'></input>
                <input className='pop-up-form__input' type='text' name='id' onChange={handleChange} placeholder='numero de dni'></input>
                <input className='pop-up-form__input' type='text' name='securityCode' onChange={handleChange} placeholder='codigo de seguridad'></input>
                <input className='pop-up-form__input' type='text' name='expiration' onChange={handleChange} placeholder='fecha de vencimiento'></input>
                <button type='submit'>Donar</button>
            </form>
        </div>
        </>
    )
}


export default Donation;