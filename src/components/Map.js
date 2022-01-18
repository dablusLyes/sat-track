import React from "react";
import { useState,useEffect } from "react";
import { MapContainer, TileLayer} from 'react-leaflet'
import MapMarker from "./MapMarker";
import {v4 as uuid} from 'uuid';
const Map = () => {

    const minute = 1000 * 60;
    const hour = 3600000


    
    // const [marker, setMarker] = useState([
    //     {
    //         id: uuid(),
    //         position: [47.373878, 8.545094]
    //     },
    //     {
    //         id: uuid(),
    //         position: [21.73878, 1.545094]
    //     },
    //     {
    //         id: uuid(),
    //         position: [7.373878, 5.545094]
    //     },
    //     {
    //         id: uuid(),
    //         position: [2.73878, 4.545094]
    //     },
    // ]);
    // array of objects with lattiude and longitude of 20 cities in europe 

    const [marker, setMarker] = useState([
        {
            id: uuid(),
            position: [47.373878, 8.545094]
        },

    ]);
    console.log(marker[0].position);
    
    // setInterval(() => {        
    //     fetch('https://api.wheretheiss.at/v1/satellites/25544')
    //     .then(response => response.json())  // convert to json
    //     .then(data => {
    //         console.log(data);
    //         let marker = {
    //             id: uuid(),
    //             position: [
    //                 data.latitude,
    //                 data.longitude
    //             ]
    //         }
    //         console.log(marker);

    //         setMarker(marker);
    //     })
    // }, 3000);
        

    return (
        <div id="map" className="map">
            <MapContainer center={[47.373878, 8.545094]} zoom={5} scrollWheelZoom={true}>
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