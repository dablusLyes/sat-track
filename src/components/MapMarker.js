import React from "react"
import {Marker, Popup } from 'react-leaflet'

const MapMarker = ({ marker }) => {
    console.log(marker);
    
    
    let position = [marker.position.lat, marker.position.lon];
    // position = |

    return (
        position.map((pos,index) =>{
            return (
                <Marker key={index}position={pos}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
            </Marker>
            )
        })
    )
}

export default MapMarker