import { useState, useEffect } from 'react';
import { Get } from '../../../Services/privateApiService';

import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

const MapView = () => {
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
        <MapContainer center={{lat:'-34.597486832988814', lng:'-58.37740350239873'}} zoom={13}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
            />
            <Marker position={{lat: '-34.6259387', lng: '-58.4535433'}} />
        </MapContainer>
    )
}

export default MapView;