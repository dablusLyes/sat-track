import React from "react"
import {Marker, Popup } from 'react-leaflet'

const SAT_ICON = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AFP_Satellite_icon.svg&psig=AOvVaw18Io_SP6OKzVbXYKDWVYYP&ust=1697108193423000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiSiuvq7YEDFQAAAAAdAAAAABAE"


const MapMarker = ({ marker }) =>  {
    return (
        marker.map((mark) =>{
            return (
                <div   key={mark.id} className="map-div">
                    <Marker  position={mark.position}>
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