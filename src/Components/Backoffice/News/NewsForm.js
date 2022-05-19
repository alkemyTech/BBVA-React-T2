import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Espacio para el ckeditor

import {Get, Post, Put} from '../../../Services/privateApiService';
import {validateImageFormat} from '../../../Services/validatorsService.js';
import '../../FormStyles.css';

const NewsForm = () => {
    const [initialValues, setInitialValues] = useState({
        title: '',
        image: '',
        content: '',
        category: ''
    });

    const handleChange = (e) => {
        if(e.target.name === 'title'){
            setInitialValues({...initialValues, title: e.target.value})
        } if(e.target.name === 'content'){
            setInitialValues({...initialValues, content: e.target.value})
        } if(e.target.name === 'category') {
            setInitialValues({...initialValues, category: e.target.value})
        }
    }
    const handleImage = (element) => {
        if(!element||!element.currentTarget.files)
            return;
        var file = element.currentTarget.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            setInitialValues({...initialValues, image: reader.result})
        }
        reader.readAsDataURL(file);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="title" value={initialValues.title || ''} onChange={handleChange} placeholder='News Title'></input>
            <div className='input-field img-input-div'>
                <img className='activity-img-prev'src={initialValues.image} alt={initialValues.name}/>
                <input className="img-select" type="file" name="image" onChange={handleImage} placeholder="News Image"></input>
            </div>
            <input className="input-field" type="text" name="content" value={initialValues.content || ''} onChange={handleChange}></input>
            <select className="select-field" name="category" value={initialValues.category || ''} onChange={handleChange}>
                <option value="" disabled>Select category</option>
                <option value="1">Demo option 1</option>
                <option value="2">Demo option 2</option>
                <option value="3">Demo option 3</option>
            </select>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default NewsForm;