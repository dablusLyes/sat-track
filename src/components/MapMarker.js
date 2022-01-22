import React from "react"
import {Marker, Popup } from 'react-leaflet'

const MapMarker = ({ marker }) =>  {
    console.log(marker[0].position);
    
    return (
        marker.map((mark,index) =>{
            return (
                <div className="map-div">
                    <Marker key={index} position={mark.position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </div>
            )
        })
    )
}

export default MapMarker