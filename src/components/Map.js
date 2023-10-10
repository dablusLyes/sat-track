import React from "react";
import { useState,useEffect } from "react";
import { MapContainer, TileLayer} from 'react-leaflet'
import MapMarker from "./MapMarker";
import {v4 as uuid} from 'uuid';
const Map = () => {


    const positions = [
        { latitude: 37.7749, longitude: 122.4194 },
        { latitude: 34.0522, longitude: 118.2437 },
        { latitude: 40.7128, longitude: 74.0060 },
        { latitude: 41.8781, longitude: 87.6298 },
        { latitude: 51.5074, longitude: 0.1278 },
        { latitude: 48.8566, longitude: 2.3522 },
        { latitude: 35.6895, longitude: 139.6917 },
        { latitude: 52.5200, longitude: 13.4050 },
        { latitude: 55.7558, longitude: 37.6176 },
        { latitude: 45.5088, longitude: 73.5540 },
        { latitude: 33.8688, longitude: 151.2093 },
        { latitude: 22.9068, longitude: 43.1729 },
        { latitude: 48.8566, longitude: 2.3522 },
        { latitude: 55.7558, longitude: 37.6176 },
        { latitude: 45.5088, longitude: 73.5540 },
        { latitude: 33.8688, longitude: 151.2093 },
        { latitude: 22.9068, longitude: 43.1729 },
        { latitude: 51.5074, longitude: 0.1278 },
        { latitude: 52.5200, longitude: 13.4050 },
        { latitude: 48.8566, longitude: 2.3522 },
        { latitude: 37.7749, longitude: 122.4194 },
        { latitude: 34.0522, longitude: 118.2437 },
        { latitude: 40.7128, longitude: 74.0060 },
        { latitude: 41.8781, longitude: 87.6298 },
        { latitude: 55.7558, longitude: 37.6176 },
        { latitude: 45.5088, longitude: 73.5540 },
        { latitude: 33.8688, longitude: 151.2093 },
        { latitude: 22.9068, longitude: 43.1729 },
        { latitude: 51.5074, longitude: 0.1278 },
        { latitude: 52.5200, longitude: 13.4050 },
      ];
      
      const [marker, setMarker] = useState(
        {
            id: uuid(),
            position: [47.373878, 8.545094]
        });

      useEffect(() => {
        for (const position in positions) {
            if (Object.hasOwnProperty.call(positions, position)) {
                const element = positions[position];
                console.log(element);
                setMarker({id:uuid(),position : [element.latitude,element.longitude]})
                setTimeout(null, 1000)

            }
        }
      }, [])
      
    
    // const [marker, setMarker] = u seState([
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


    // make a call to the api every two seconds and update the state


    
    console.log(marker);
    
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