import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../FormStyles.css';
//import {validateImageFormat} from 'src/Services/validatorsService.js';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Get} from '../../../Services/privateApiService'

const ActivitiesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        image: '',
        description: '<p> </p>'
    });

    // Estimado para obtener la data de edicion 
    let { id } = useParams();
    console.log(id);
    if({id}){
        Get("https://ongapi.alkemy.org/api/activities/" + id).then((res)=>{ //Modificar url y llamar al .env
                let act = res.data.data;
                setInitialValues({name: act.name, image: act.image, description: act.description});
            });
    }

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        }if(e.target.name === 'image'){
            setInitialValues({...initialValues, image: e.target.value})
        } if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
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
                        console.log(id);
                    } }
                />
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default ActivitiesForm;