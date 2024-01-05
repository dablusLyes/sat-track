import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from "./MapMarker";

const Map = ({ showDetails, marker }) => {
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
