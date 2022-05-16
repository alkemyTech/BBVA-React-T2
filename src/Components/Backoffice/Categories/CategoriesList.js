import { useState, useEffect } from 'react';
import { Get } from '../../../Services/publicApiService';

function CategoriesList() {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const endpoint = process.env.REACT_APP_CATEGORIES;
    
    const getCategories = async () => {
        const response = await Get(baseURL + endpoint);
        const categories = await response.data.data;
        console.log(categories);
    }

    useEffect(() => {
        getCategories();
    }, [])

    return ( 
        <table className="table" style={{margin: "50px auto", fontSize: "18px", textAlign: "center"}}>
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Created At</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>Larry</td>
                <td> Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </table>
     );
}

export default CategoriesList;