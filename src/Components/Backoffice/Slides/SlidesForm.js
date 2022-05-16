import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Get } from '../../../Services/privateApiService';
import { Post } from '../../../Services/publicApiService';
import '../../FormStyles.css';

const SlidesForm = () => {

    const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_SLIDES
    let { id } = useParams();
    const [error, setError] = useState('')
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        order: '',
        image: '',
    });

    const fetchSlides = async () => {
        if(id) {
            const res = await Get(`${endpoint + '/' + id}`)
            setInitialValues({
                name: res.data.data.name,
                description: res.data.data.description,
                order: res.data.data.order,
                image: res.data.data.image,
            })
        }
    }

    useEffect(() => {
        fetchSlides();
    }, []);

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
            <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write the description"></input>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default SlidesForm;