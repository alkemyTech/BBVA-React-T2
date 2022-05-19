import L from 'leaflet';

export const IconLocation = L.icon({
    iconUrl: require('../../../assets/instagram.svg'),
    iconRetinaUrl: require('../../../assets/location.svg'),
    iconAnchor: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35,35],
    className: 'leaflet-venue-icon',
});
