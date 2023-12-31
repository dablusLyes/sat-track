import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import satSvg from "../FP_Satellite_icon.svg";

const satIcon = new L.Icon({
	iconUrl: satSvg,
	iconRetinaUrl: satSvg,
	iconAnchor: null,
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(30, 30),
	className: "leaflet-div-icon",
});

const MapMarker = ({ marker }) => {
	return marker.map((mark) => {
		return (
			<div
				key={mark.id}
				className="map-div"
			>
				<Marker
					icon={satIcon}
					position={mark.position}
					onClick={() => {
						console.log("nik mok");
					}}
				>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</div>
		);
	});
};

export default MapMarker;
