import { useEffect, useState } from 'react';
import Leaflet from 'leaflet';
import {MapContainer,TileLayer,Marker} from "react-leaflet"
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function Map(coord){
    const [latlon, setLatlon] = useState({lat:51.505,lon:-0.09})
    const [widthMap, setWidth] = useState('100%')
    useEffect(() => {
        if(parseInt(window.innerWidth) <= 700) setWidth('100%')
        else setWidth('65%')
        console.log(window.innerWidth)
        setLatlon({
            lat:coord.coord.lat,
            lon:coord.coord.lon
        })
    },[window.innerWidth,coord])
    return(
        <MapContainer style={{height : '40vh', width:widthMap, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}} center={[latlon.lat,latlon.lon]} zoom={1} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              <Marker position={[latlon.lat,latlon.lon]}></Marker>
        </MapContainer>
    )
}
export default Map;