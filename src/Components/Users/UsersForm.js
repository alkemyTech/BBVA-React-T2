import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Get } from '../../Services/privateApiService'
import '../FormStyles.css';

const UserForm = () => {

    let { id } = useParams();
    const [user, setUser] = useState({})

    const fetchUser = async () => {
        const res = await Get("users", id)
            setUser(res.data.data)
    };

    useEffect(() => {
        if(id){
            fetchUser();
        }
    }, []);

    useEffect(()=> {
        setInitialValues({
            name: user.name,
            email: user.email,
            roleId: user.role_id,
            profile_image: user.profile_image
            
        })
    }, [user])

    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        roleId: '',
        profile_image: ''
    })

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } 
        if(e.target.name === 'email'){
            setInitialValues({...initialValues, email: e.target.value})
        }
        if(e.target.name === 'profile_image'){
            setInitialValues({...initialValues, profile_image: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(id) {
            console.log('iniciando metodo put ' + initialValues)
        } else {
            console.log('iniciando metodo post ' + initialValues)
        }
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name || ''} onChange={handleChange} placeholder="Name"></input>
            <input className="input-field" type="text" name="email" value={initialValues.email || ''} onChange={handleChange} placeholder="Email"></input>
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
 
export default UserForm;