import { useState, useEffect } from 'react';
import { Get } from '../../../Services/privateApiService';

const Map = () => {
    const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_ORGANIZATION;

    const [coords, setCoords] = useState();

    const getDirections = async () => {
        let res = await Get(endpoint);
        console.log(res.data.data.address);
    }

    useEffect(() => {
        getDirections();
    }, [])

    return (
        <h1>Mapa</h1>
    )
}

export default Map;