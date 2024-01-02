import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from "./MapMarker";
import { v4 as uuid } from "uuid";
import io from "socket.io-client";

const Map = ({ showDetails }) => {
	const positions = [
		{ lat: 37.7749, lon: 122.4194 },
		{ lat: 34.0522, lon: 118.2437 },
		{ lat: 40.7128, lon: 74.006 },
		{ lat: 41.8781, lon: 87.6298 },
		{ lat: 51.5074, lon: 0.1278 },
		{ lat: 48.8566, lon: 2.3522 },
		{ lat: 35.6895, lon: 139.6917 },
		{ lat: 52.52, lon: 13.405 },
		{ lat: 55.7558, lon: 37.6176 },
		{ lat: 45.5088, lon: 73.554 },
		{ lat: 33.8688, lon: 151.2093 },
		{ lat: 22.9068, lon: 43.1729 },
		{ lat: 48.8566, lon: 2.3522 },
		{ lat: 55.7558, lon: 37.6176 },
		{ lat: 45.5088, lon: 73.554 },
		{ lat: 33.8688, lon: 151.2093 },
		{ lat: 22.9068, lon: 43.1729 },
		{ lat: 51.5074, lon: 0.1278 },
		{ lat: 52.52, lon: 13.405 },
		{ lat: 48.8566, lon: 2.3522 },
		{ lat: 37.7749, lon: 122.4194 },
		{ lat: 34.0522, lon: 118.2437 },
		{ lat: 40.7128, lon: 74.006 },
		{ lat: 41.8781, lon: 87.6298 },
		{ lat: 55.7558, lon: 37.6176 },
		{ lat: 45.5088, lon: 73.554 },
		{ lat: 33.8688, lon: 151.2093 },
		{ lat: 22.9068, lon: 43.1729 },
		{ lat: 51.5074, lon: 0.1278 },
		{ lat: 52.52, lon: 13.405 },
	];

	const [marker, setMarker] = useState([
		{
			positions: { lat: 52.52, lon: 13.405 },
		},
		{
			positions: { lat: 31.52, lon: 66.405 },
		},
		{
			positions: { lat: 22.52, lon: 13.405 },
		},
		{
			positions: { lat: 57.52, lon: 13.405 },
		},
	]);

	const socket = io("http://localhost:3001");
	useEffect(() => {
		console.log("n7eb react");
		socket.on("satPosition", (message) => {
			console.log("dz?????", message, socket.id);
		});
		return () => {
			socket.off("broadcast");
		};
	}, []);

	return (
		<div
			id="map"
			className="map"
		>
			<MapContainer
				center={[20, 20]}
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
