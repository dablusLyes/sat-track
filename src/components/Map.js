import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from "./MapMarker";
import { v4 as uuid } from "uuid";
const Map = ({ showDetails }) => {
	const positions = [
		{ latitude: 37.7749, longitude: 122.4194 },
		{ latitude: 34.0522, longitude: 118.2437 },
		{ latitude: 40.7128, longitude: 74.006 },
		{ latitude: 41.8781, longitude: 87.6298 },
		{ latitude: 51.5074, longitude: 0.1278 },
		{ latitude: 48.8566, longitude: 2.3522 },
		{ latitude: 35.6895, longitude: 139.6917 },
		{ latitude: 52.52, longitude: 13.405 },
		{ latitude: 55.7558, longitude: 37.6176 },
		{ latitude: 45.5088, longitude: 73.554 },
		{ latitude: 33.8688, longitude: 151.2093 },
		{ latitude: 22.9068, longitude: 43.1729 },
		{ latitude: 48.8566, longitude: 2.3522 },
		{ latitude: 55.7558, longitude: 37.6176 },
		{ latitude: 45.5088, longitude: 73.554 },
		{ latitude: 33.8688, longitude: 151.2093 },
		{ latitude: 22.9068, longitude: 43.1729 },
		{ latitude: 51.5074, longitude: 0.1278 },
		{ latitude: 52.52, longitude: 13.405 },
		{ latitude: 48.8566, longitude: 2.3522 },
		{ latitude: 37.7749, longitude: 122.4194 },
		{ latitude: 34.0522, longitude: 118.2437 },
		{ latitude: 40.7128, longitude: 74.006 },
		{ latitude: 41.8781, longitude: 87.6298 },
		{ latitude: 55.7558, longitude: 37.6176 },
		{ latitude: 45.5088, longitude: 73.554 },
		{ latitude: 33.8688, longitude: 151.2093 },
		{ latitude: 22.9068, longitude: 43.1729 },
		{ latitude: 51.5074, longitude: 0.1278 },
		{ latitude: 52.52, longitude: 13.405 },
	];

	const [marker, setMarker] = useState([
		{
			positions: { latitude: 52.52, longitude: 13.405 },
		},
	]);

	return (
		<div
			id="map"
			className="map"
		>
			<MapContainer
				center={[47.373878, 8.545094]}
				zoom={5}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapMarker marker={marker} />
			</MapContainer>
		</div>
	);
};

export default Map;
