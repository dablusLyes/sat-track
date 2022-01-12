import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer} from 'react-leaflet'
import MapMarker from "./MapMarker";
import {v4 as uuid} from 'uuid';
const Map = () => {

    const [marker, setMarker] = useState([
        {
            id: '0',
            position: {
                lat: 47.373878,
                lon:8.545094
            }
        }
    ]);


    setInterval(() => {
        
        fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())  // convert to json
        .then(data => {
            console.log(data);
            let marker = {
                id: uuid(),
                position: [
                    data.latitude,
                    data.longitude
                ]
            }
            console.log(marker);

            setMarker(marker);
        })
        

    }, 2000);


    return (
        <div id="map" className="map">
            <MapContainer center={[51.505, -0.09]} zoom={8} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapMarker marker={marker}/>
            </MapContainer>
        </div>
    )
}

export default Map