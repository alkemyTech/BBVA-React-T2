import { useState, useEffect } from 'react';
import { Get } from '../../../Services/privateApiService';

import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';
import { IconLocation } from './IconLocation.js';

const MapView = ({ coordinates }) => {
    const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_ORGANIZATION;

    const [coordsONG, setCoordsONG] = useState({
        lat: '-34.597486832988814',
        lng: '-58.37740350239873'
    });

    const getDirections = async () => {
        let res = await Get(endpoint);
        console.log(res.data.data.address);
    }

    useEffect(() => {
        getDirections();
    }, [])
    
    return (
        <MapContainer center={{lat: coordsONG.lat, lng: coordsONG.lng}} zoom={13}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
            />
            <Marker position={{lat: coordsONG.lat, lng: coordsONG.lng}} 
               icon={IconLocation} 
            />
            <Marker position={{lat: coordinates.latitude, lng: coordinates.longitude}} 
               icon={IconLocation} 
            />
        </MapContainer>
    )
}

export default MapView;