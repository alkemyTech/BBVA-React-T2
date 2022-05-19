import locationIcon from '../../../assets/location.svg';
import { Icon } from 'leaflet';

export const markerIcon = new Icon({
    iconUrl: locationIcon,
    iconRetinaUrl: locationIcon,
    popupAnchor: [-0,-0],
    iconSize: [30,30]
})