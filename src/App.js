import "./App.css";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import SatDetails from "./components/SatDetails";
import NavMenu from "./components/NavMenu";
import satSvg from "./FP_Satellite_icon.svg";
import io from "socket.io-client";

function App() {
	const [showDetails, setShowDetails] = useState(false);
	console.log("APPJS RENDERING?");

	return (
		<div className="App">
			<div className="app-header">
				<h1>
					Satellite
					<img
						alt="Sat Logo"
						className="satLogo"
						src={satSvg}
					></img>
					tracker
				</h1>
				<NavMenu />
			</div>
			{showDetails && <SatDetails />}
			<div className="content-container">
				<div className="sat-map">
					<Map showDetails={setShowDetails} />
				</div>
			</div>
		</div>
	);
}

export default App;
