import { useState, useEffect } from 'react';
import { Get, Delete } from '../../../Services/privateApiService';
import { Link } from 'react-router-dom';

function CategoriesList() {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const endpoint = process.env.REACT_APP_CATEGORIES;

    const getCategories = async () => {
        const response = await Get(baseURL + endpoint);
        const categoriesData = await response.data.data;
        console.log(categoriesData);
        setCategories(categoriesData);
    }

    const deleteCategorie = async (id) => {
        const response = await Delete(baseURL + endpoint + `/${id}`);
        console.log(response);
        if(response.data.success) {
            await getCategories();
        }
    }
    

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        getCategories();
    }, [])

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return (`${day}-${month}-${year} ${hours}:${minutes}`)
    }

    const categoriesRows = categories.map(categorie => (
        <tr key={categorie.id}>
            <td>{categorie.name}</td>
            <td>{formatDate(categorie.created_at)}</td>
            <td><Link to={`/backoffice/categories/edit/${categorie.id}`}>EDITAR</Link></td>
            <td><button onClick={() => deleteCategorie(categorie.id)}>BORRAR</button></td>
        </tr>
    ))

    return ( 
        <table className="table" style={{margin: "50px auto", fontSize: "18px", textAlign: "center"}}>
                              {console.log(categories)}
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Created At</th>
                <th scope="col" colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                { categoriesRows }
            </tbody>
        </table>
     );
}

export default CategoriesList;