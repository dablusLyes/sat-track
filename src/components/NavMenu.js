import React from "react";
import { useState, useEffect, useRef } from "react";

export default function NavMenu() {
	const navListRef = useRef(null);
	const [showList, setshowList] = useState(false);
	const toggleNavList = () => {
		setshowList(!showList);
	};

	return (
		<div className="navBtn">
			<div
				onClick={(e) => {
					toggleNavList();
				}}
				className="navButton"
			>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<div
				style={{ display: showList ? "flex" : "none" }}
				ref={navListRef}
				className="navList"
			>
				<div>Github</div>
				<div>Linkedin</div>
				<div>Personnal Website</div>
			</div>
		</div>
	);
}
