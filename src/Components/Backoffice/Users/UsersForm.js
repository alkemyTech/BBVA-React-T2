import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Get } from '../../../Services/privateApiService';
import { Post } from '../../../Services/publicApiService';
import './UsersForm.css'

const UserForm = () => {

    const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_USERS
    let { id } = useParams();
    const [error, setError] = useState('')
    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        roleId: '',
        password: ''
    })

    const fetchUser = async () => {
        if(id) {
            const res = await Get(`${endpoint + '/' +id}`)
            setInitialValues({
                name:res.data.data.name,
                email: res.data.data.email,
                roleId: res.data.data.role_id, 
                password:''
            })
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleChange = (e) => {
        setInitialValues({
            ...initialValues,
            [e.target.name] : e.target.value
        })
    }

    const createUser = async () => {
        const response = await Post(endpoint, {
            name: initialValues.name.toString(),
            email: initialValues.email.toString(),
            password: initialValues.password.toString(),
            roleId: initialValues.roleId.toString(),
        });
        return response;
      }

      const config = {
            headers: {
                Group: 2
            }
        } 
        
      
      const editUser = async () => {
        const response = await axios.put(endpoint + '/' + id, {
            name: initialValues.name.toString(),
            email: initialValues.email.toString(),
            password: initialValues.password.toString(),
            roleId: initialValues.roleId.toString(),
        }, config);
        return response;
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateAll()) {
                if(id) {
                    editUser()
                } else {
                    createUser()
                }
                setError('')
            }
        }

    const validateName = (name) => {
        if(name.length < 4 || name===null) {
            setError('El nombre es demasiado corto')
            return false
        } 
        return true
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email.match(re) || email===null){
            setError('Email inválido')
            return false
        }
        return true
    }

    const validatePassword = (password) => {
        if(password.length < 8 || password===null) {
            setError('La contraseña es demasiado corta')
            return false
        }
        return true
    }

    const validateRole = (role) => {
        if(role > 2 || role < 1) {
            setError('Id de rol inválido')
            return false
        }
        return true
    }

    const validateAll = () => {
        return validateName(initialValues.name) && 
                validatePassword(initialValues.password) && 
                validateEmail(initialValues.email) && 
                validateRole(initialValues.roleId)     
    }

    return (
        <div className="main">
            <div className="container">
                {id ? <h1 className="title">Editar usuario</h1> : <h1 className="title">Crear usuario</h1>}
                <form className="form-container" onSubmit={handleSubmit}>
                    {<p className='error'>{error}</p>}
                    <input className="input" type="text" name="name" value={initialValues.name || ''} onChange={handleChange} placeholder="Name"></input>
                    <input id="outlined-basic" variant="outlined" className="input" type="text" name="email" value={initialValues.email || ''} onChange={handleChange} placeholder="Email"></input>
                    <input id="outlined-basic" variant="outlined" className="input" type="password" name="password" value={initialValues.password || ''} onChange={handleChange} placeholder="Password"></input>
                    <select className="select-field" value={initialValues.roleId || ''} onChange={e => setInitialValues({...initialValues, roleId: e.target.value})}>
                        <option value="" disabled >Select the role</option>
                        <option value="1">Admin</option>
                        <option value="2">User</option>
                    </select>
                    <button className="primary-backoffice-button" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}
 
export default UserForm;