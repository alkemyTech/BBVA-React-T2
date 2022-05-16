import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Get } from '../../Services/privateApiService'
import '../FormStyles.css';

const Form = () => {

    let { id } = useParams();
    const [user, setUser] = useState({})
    const [error, setError] = useState({
        name: '',
        email: '',
        password: ''
    })

    const fetchUser = async () => {
        const res = await Get("/users", id)
            setUser(res.data)
    };

    useEffect(() => {
        if(id){
            fetchUser();
        }
    }, []);

    useEffect(()=> {
        if(id){
            setInitialValues({
                name: user?.name,
                email: user?.email,
                roleId: user?.role_id,
                profile_image: user?.profile_image, 
                password:''  
            })
        }
    }, [])

    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        roleId: '',
        profile_image: '',
        password: ''
    })

    const handleChange = (e) => {
        console.log(initialValues);
        setInitialValues({
            ...initialValues,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateAll()) {
            if(id) {
                console.log('iniciando metodo put ' + initialValues)
            } else {
                console.log('iniciando metodo post ' + initialValues)
            }
        } else {
            console.log(error)
        }
    }

    const validateName = (name) => {
        if(name.length < 4 || name===null) {
            
            return false
        } 
        setError({...error, name: ''})
        return true
        
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email.match(re) || email===null){
            return false
            
        }
        setError({...error, email: ''})
        return true
    }

    const validatePassword = (password) => {
        if(password.length < 8 || password===null) {
            
            return false
        }
        setError({...error, password: ''})
        return true
    }

    const validateAll = () => {
        let valid = true;
        const error = {
            name: '',
            email: '',
            password: ''
        }
        if(!validateName(initialValues.name)) {
            error.name = 'El nombre es demasiado corto';
            valid = false
        } 

        if(!validateEmail(initialValues.email)) {
            error.email = 'Email inválido';
            valid = false
        }
          
        if(!validatePassword(initialValues.password)) {
            error.password = 'La contraseña es demasiado corta';
            valid = false
        }
        setError({...error});
        return valid          
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            {<div>
                <p>{error.name}</p>
                <p>{error.email}</p>
                <p>{error.password}</p>
            </div>}
            <input className="input-field" type="text" name="name" value={initialValues.name || ''} onChange={handleChange} placeholder="Name"></input>
            <input className="input-field" type="text" name="email" value={initialValues.email || ''} onChange={handleChange} placeholder="Email"></input>
            <input className="input-field" type="password" name="password" value={initialValues.password || ''} onChange={handleChange} placeholder="Password"></input>
            <select className="input-field" value={initialValues.roleId || ''} onChange={e => setInitialValues({...initialValues, roleId: e.target.value})}>
                <option value="" disabled >Select the role</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
            </select>
            <input type="file" name="profile_image" value={initialValues.profile_image || ''} onChange={handleChange}></input>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default Form;