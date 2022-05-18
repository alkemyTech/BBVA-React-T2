import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Get, Post, Put} from '../../../Services/privateApiService';
import {validateImageFormat} from '../../../Services/validatorsService.js';
import {createActivity, updateActivity} from '../../../Services/Activities.Service';
import '../../FormStyles.css';
import './ActivitiesForm.css';
import './ActivitiesBackOffice.css';

const ActivitiesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        image: '',
        description: '<p> </p>'
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const url= "https://ongapi.alkemy.org/api/activities"; //Modificar url y llamar al .env

    const fetch = async() =>{
        if(id){
            const res = await Get(url+'/'+id)
            const {name, image, description} = await res.data.data
            setInitialValues({
                description, image, name
            })
        }
    };
     
    // Estimado para obtener la data de edicion 
    useEffect ( () => {
        fetch()
    }, []);//pendiente ver porq no renderiza del todo bien


    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value});
        }
    }

    const isBlank = () => {
        let keys = Object.keys(initialValues);
        for (let i = 0; i < keys.length-1; i++) {
            let str = initialValues[keys[i]];
            if (!str || /^\s*$/.test(str)) {
                setErrors({[keys[i]]: 'El campo ' + keys[i] + ' no puede estar vacio'})
                alert('Error: el campo ' + keys[i] + ' no puede estar vacio')
                return true;
            }
        } 
        if (initialValues.description === "<p> </p>"){
            setErrors({'descripcion': 'El campo descripcion no puede estar vacio'})
            alert('Error: el campo descripcion no puede estar vacio')
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

        //caso create
        if(!id){
            Post(url, createActivity(initialValues));
            alert("Actividad creada satisfactoriamente");
            return;
        }
        //caso edit
        if(id){Put(url + '/' + id, updateActivity(id, initialValues));
            alert("Actividad " + id + "actualizada exitosamente");
            return;
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
    
    return (
        <form className="form-container form-activity" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Activity Title"></input>
            <div className='input-field img-input-div'>
                <img className='activity-img-prev'src={initialValues.image} alt={initialValues.name}/>
                <input className="img-select" type="file" name="image" onChange={handleImage} placeholder="Activity Image"></input>
            </div>
            <CKEditor
                    editor={ ClassicEditor }
                    data={ initialValues.description }
                    name="description"
                    onChange={( event, editor ) => {
                        const data = editor.getData();
                        setInitialValues((prevState)=>({...prevState, description: data}));
                    } }
                />
            <button className="create-backoffice-button button-create" type="submit">Send</button>
        </form>
    );
}

 
export default ActivitiesForm;