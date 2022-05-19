import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Get, Post, Put} from '../../../Services/privateApiService';
import {validateImageFormat} from '../../../Services/validatorsService.js';
import '../../FormStyles.css';

const NewsForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        image: '',
        content: '<p> </p>',
        category_id: ''
    });
    const [errors, setErrors] = useState();
    const [loading, setLoading] = useState();
    const [categories, setCategories] = useState([]);

    const { id } = useParams();
    const url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_NEWS;
    const urlCategories = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_CATEGORIES;


    const fetchData = async() =>{
        if(id){
            const res = await Get(url+'/'+id)
            const {name, image, content, category_id} = await res.data.data
            setInitialValues({
                name, image, content, category_id
            })
            setLoading(false);
        }
        await Get(urlCategories)
        .then( (res) =>{
            setCategories(res.data.data);
        });   
    };
     
    // Estimado para obtener la data de edicion 
    useEffect ( () => {
        setLoading(true);
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
        if(!validateImageFormat(initialValues.image)){
            setErrors({'image': 'El fomato de la imagen no es valido. Solo se aceptan jpg y png'});
            alert('El fomato de la image no es valido. Solo se aceptan jpg y png')
            return;
        }
        if(id){
            Put(url + '/' + id, initialValues);
            alert("Actividad " + id + "actualizada exitosamente");
        }
        //caso create
        else{
            Post(url, initialValues);
            alert("Actividad creada satisfactoriamente");
        }
        console.log(initialValues);
    }

    return (
        <form className="form-container form-news" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name || ''} onChange={handleChange} placeholder='News Title'></input>
            <div className='input-field img-input-div'>
                <img className='activity-img-prev'src={initialValues.image} alt={initialValues.name}/>
                <input className="img-select" type="file" name="image" onChange={handleImage} placeholder="News Image"></input>
            </div>
            <CKEditor
                    editor={ ClassicEditor }
                    data={ initialValues.content }
                    name="content"
                    onChange={( event, editor ) => {
                        const data = editor.getData();
                        setInitialValues((prevState)=>({...prevState, content: data}));
                    } }
                />
            <select className="select-field" name="category" value={initialValues.category_id || ''} onChange={handleChange}>
                <option value="" disabled>Select category</option>
                {categories.map( (category) => {
                    const {id, description} = category;
                    return(
                        <option value={id} key={id}>{description}</option>
                    )
                })}
            </select>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default NewsForm;