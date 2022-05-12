import React, { useState } from 'react';
import '../FormStyles.css';

const ActivitiesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        image: '',
        description: ''
    });

    /* Estimado para obtener la data de edicion 
    if(id){
        const res = get(process.env.REACT_APP_ACTIVITIES, id)
        setInitialValues({name: res.data.name, image: res.data.image, description: res.data.description})
    }
    */

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
            <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write some activity description"></input>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default ActivitiesForm;