import { Get } from "./publicApiService";
import getCurrentDate from "../Utils/getCurrentDate";

const url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_ACTIVITIES;

export function createActivity(activityBasics){
    //La funcion devuelve un objeto con los campos de "Actividad"
    //Params:
    //activityBasics: espera un objeto con los campos basicos de la actividad.
    
    return {...activityBasics, created_at: getCurrentDate(), user_id: 0, updated_at: '', deleted_at: '', slug: ''};
};

export async function updateActivity(id, updatedActivityFields){
    //La funcion devuelve objeto "Actividad" con la actividad del
    //  id actualizada con los campos recibidos
    //Params:
    //updatedActivityFields: espera un objeto con los campos que fueron actualizados
    let activity;
    const updateKeys = Object.keys(updatedActivityFields);
    await Get(url + '/' + id).then((res)=>{
        activity = res.data.data
    })

    for(let i=0; i<updateKeys.length; i++){
        activity[updateKeys[i]]= updatedActivityFields[updateKeys[i]];
    }
    activity['updated_at'] = getCurrentDate();
    return activity;
}