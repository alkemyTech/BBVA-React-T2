import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../FormStyles.css';
import {validateImageFormat} from '../../Services/validatorsService.js';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Get, Post} from '../../Services/privateApiService';
import {createActivity, updateActivity} from '../../Services/Activities.Service'

const ActivitiesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        image: '',
        description: '<p> </p>'
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const url= "https://ongapi.alkemy.org/api/activities/"; //Modificar url y llamar al .env

    // Estimado para obtener la data de edicion 
    useEffect(() => {
        setLoading(true);
        console.log(id);
        if({id}){
            Get(url + id).then((res)=>{ 
                    let act = res.data.data;
                    console.log(initialValues);
                    console.log({name: act.name, image: act.image, description: act.description})
                    setInitialValues({name: act.name, image: act.image, description: act.description});
                    console.log(initialValues);
                    setLoading(false);
                });
                console.log(initialValues);
        }
    }, []);//pendiente ver porq no renderiza del todo bien


    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        }if(e.target.name === 'image'){
            setInitialValues({...initialValues, image: e.target.value})
        } if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        }
    }

    const isBlank = () => {
        let keys = Object.keys(initialValues);
        for (let i = 0; i < keys.length-1; i++) {
            let str = initialValues[keys[i]];
            console.log([keys[i]])
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
        console.log(initialValues);
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
            //Post(url, createActivity(initialValues));
            console.log("Actividad creada satisfactoriamente");
            return;
        }
        //caso edit
        if(id){
            //Put(url + id, updateActivity(id, initialValues));
            console.log("Actividad " + id + "actualizada exitosamente");
            return;
        }
    }
    
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Activity Title"></input>
            <input className="input-field" type="text" name="image" value={initialValues.image} onChange={handleChange} placeholder="Activity Image"></input>
            <CKEditor
                    editor={ ClassicEditor }
                    data={ initialValues.description }
                    name="description"
                    onChange={( event, editor ) => {
                        const data = editor.getData();
                        setInitialValues({...initialValues, description: data});
                    } }
                />
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}

 
export default ActivitiesForm;