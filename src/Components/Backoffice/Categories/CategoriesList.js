import { useState, useEffect } from 'react';
import { Get } from '../../../Services/privateApiService';
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

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        getCategories();
    }, [])

    const categoriesRows = categories.map(categorie => (
        <tr key={categorie.id}>
            <td>{categorie.name}</td>
            <td>{categorie.created_at}</td>
            <td><Link to={`/backoffice/categories/edit/${categorie.id}`}>EDITAR</Link></td>
            <td>BORRAR</td>
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