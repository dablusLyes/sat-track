import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

import L from "leaflet";
import satSvg from "../FP_Satellite_icon.svg";
import io from "socket.io-client";

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

const MapMarker = () => {
	const [marker, setMarker] = useState([
		{
			positions: { lat: 52.52, lon: 13.405 },
		},
	]);
	useEffect(() => {
		const socket = io("ws://localhost:3001");
		if (socket) {
			socket.on("satPosition", (message) => {
				setMarker(message);
				console.log(message);
			});
		}

		return () => {
			socket.off("satPosition");
		};
	}, []);
	return marker.map((mark) => {
		return (
			<>
				<Marker
					key={`MarkerId${mark.satid}`}
					id={`satMarker markerId${mark.satid}`}
					icon={satIcon}
					position={mark.positions}
				>
					<Popup>{mark.satName}</Popup>
				</Marker>
			</>
		);
	});
};

export default MapMarker;
