import React, { useState, useEffect } from 'react';
import '../../CardListStyles.css';
//import functions
import Alert from '../../Alerts/Alerts.js';
import { Get } from '../../../Services/privateApiService.js';
import Spinner from '../../Spinner/Spinner.js';

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [loader, setLoader] = useState(true);

    const handleSpinner = () => {
        setTimeout(() => setLoader(false), 2000);
    }

    const newsMock = [
        {id: 2, name: 'Titulo de prueba', description: 'Descripcion de prueba'},
        {id: 1, name: 'Titulo de prueba', description: 'Descripcion de prueba'},
        {id: 3, name: 'Titulo de prueba', description: 'Descripcion de prueba'}
    ];

    //Lo que está dentro de esta función debería ser reemplazo por lo la peticion real a la api.
    //Si la función falla saltará la alerta diciendo que hubo un error.
    const getNews = async () => {
        try {
            const res = await Get('endpoint');
            setNews(res.data.data);
        } catch (err) {
            Alert("Something went wrong. Please try again", "There was an error loading the userList", "error");
        }
    }

    useEffect(() => {
        handleSpinner();
        getNews();
    },[])

    return (
        <>
            { (loader)? <Spinner /> :
                <div>
                    <h1>Listado de Novedades</h1>
                    <ul className="list-container">
                        {newsMock.length > 0 ? 
                            newsMock.map((element) => {
                                return(
                                    <li className="card-info" key={element.id}>
                                        <h3>{element.name}</h3>
                                        <p>{element.description}</p>
                                    </li>
                                )
                            })
                    :
                        <p>No hay novedades</p>
                    }
                </ul>
            </div>
            }
        </>
    );
}
 
export default NewsList;