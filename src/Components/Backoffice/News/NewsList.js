import '../Activities/ActivitiesBackOffice.css';
import '../../../general-styles.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Delete, Get } from '../../../Services/privateApiService';
import Alert from '../../Alerts/Alerts';


//import Alert from '../../Alerts/Alerts';

import News from './News.js';

const NewsList = () => {
    const [news, setNews] = useState([]);
    const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_NEWS;

    const handleDelete = async (id) => {
        try {
            await Delete(`${endpoint + '/' + id}`);
            await getNews();
            setNews(news.filter(news => news.id !== id));
        } catch (err) {
            alert('error')
        }
    }
    
    useEffect(() => {
        getNews()
    },[setNews])

    const getNews = async () => {
        try {
            const res = await Get('endpoint');
            setNews(res.data.data);
        } catch (err) {
            Alert("Something went wrong. Please try again", "There was an error loading the userList", "error");
        }
    }

    useEffect(() => {
        //handleSpinner();
        getNews();
    },[])

    return (
        <>
        <div className="container-create-activity">
            <Link to={'/backoffice/news/create'} className='container-create-activity__a'>
                <button type='button' className= 'create-backoffice-button button-create'>Crear nueva novedad</button>
            </Link>
        </div>
        <div class='list-container'>
            <h1 class='list-container__h1'>Lista de actividades</h1>
            <section className='list-container__section rows-container'> 
                <p>Nombre</p>
                <p>Imagen</p>
                <p>Creado</p>
            </section>
            {
                news.map((news) => {
                    return (
                        <News 
                            id={news.id} 
                            name={news.name} 
                            createdAt={news.created_at} 
                            image={news.image} 
                            key={news.id} 
                            handleDelete={handleDelete}
                        />
                    )
                })
            }
        </div>
        </>
    )
}

export default NewsList;