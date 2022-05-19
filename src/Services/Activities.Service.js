import { Get } from "./publicApiService";
import getCurrentDate from "../Utils/getCurrentDate";

const url = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_ACTIVITIES;

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
    return activity;
}