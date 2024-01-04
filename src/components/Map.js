import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from "./MapMarker";
import { v4 as uuid } from "uuid";
import io from "socket.io-client";

const Map = ({ showDetails }) => {
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
	const currentDate = new Date();

	useEffect(() => {
		socket.on("satPosition", (message) => {
			const currentTimeStamp = Math.ceil(currentDate.getTime() / 1000);
			setInterval(() => {}, 1000);

			console.log(message);
		});
		return () => {
			socket.off("satPosition");
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
