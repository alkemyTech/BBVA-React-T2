import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Espacio para el ckeditor

import {Get, Post, Put} from '../../../Services/privateApiService';
import {validateImageFormat} from '../../../Services/validatorsService.js';
import '../../FormStyles.css';

const NewsForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        image: '',
        content: '',
        category_id: ''
    });
    const [errors, setErrors] = useState();

    const { id } = useParams();
    const url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_NEWS;

    const fetchData = async() =>{
        if(id){
            const res = await Get(url+'/'+id)
            const {name, image, content, category_id} = await res.data.data
            setInitialValues({
                name, image, content, category_id
            })
        }
    };
     
    // Estimado para obtener la data de edicion 
    useEffect ( () => {
        fetchData()
    }, []);

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'content'){
            setInitialValues({...initialValues, content: e.target.value})
        } if(e.target.name === 'category') {
            setInitialValues({...initialValues, category_id: e.target.value})
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

    const isBlank = () => {
        let keys = Object.keys(initialValues);
        for (let i = 0; i < keys.length-2; i++) {
            let str = initialValues[keys[i]];
            if (!str || /^\s*$/.test(str)) {
                setErrors({[keys[i]]: 'El campo ' + keys[i] + ' no puede estar vacio'})
                alert('Error: el campo ' + keys[i] + ' no puede estar vacio')
                return true;
            }
        } 
        if (initialValues.content === "<p> </p>"){
            setErrors({'content': 'El campo contenido no puede estar vacio'})
            alert('Error: el campo contenido no puede estar vacio')
            return true;
        }     
        if (initialValues.category_id === ""){
            setErrors({'category_id': 'Debe seleccionar una categoria'})
            alert('Error: Debe seleccionar una categoria')
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isBlank()){
            return;
        }
        console.log(initialValues);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name || ''} onChange={handleChange} placeholder='News Title'></input>
            <div className='input-field img-input-div'>
                <img className='activity-img-prev'src={initialValues.image} alt={initialValues.name}/>
                <input className="img-select" type="file" name="image" onChange={handleImage} placeholder="News Image"></input>
            </div>
            <input className="input-field" type="text" name="content" value={initialValues.content || ''} onChange={handleChange}></input>
            <select className="select-field" name="category" value={initialValues.category_id || ''} onChange={handleChange}>
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