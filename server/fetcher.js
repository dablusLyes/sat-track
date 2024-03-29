const axios = require("axios");
const express = require("express");
const CONFIG = require("../config");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const { log } = require("console");

const NUMBER_OF_POSITIONS = CONFIG.SERVER.SAT_POSITIONS;
const API_KEY = CONFIG.SERVER.API_KEY;

let norad_list = [];

try {
	const data = fs.readFileSync(
		path.join(__dirname, "./", "norad.txt"),
		"utf8",
	);
	norad_list = data.trim().split(" ");
} catch (err) {
	console.log(err);
}

// norad_list = ['25544','36516'];

const fetch_sat_data_from_api = async (NORAD) => {
	try {
		return axios({
			method: "get",
			url: `https://api.n2yo.com/rest/v1/satellite/positions/${NORAD}/41.702/-76.014/0/${NUMBER_OF_POSITIONS}/&apiKey=${API_KEY}`,
		}).then((res) => res.data);
	} catch (error) {
		console.log(error);
	}
};

const isValidNorad = (norad) => {
	if (typeof norad === "number") {
		return true;
	} else {
		return false;
	}
};

const multiple_sat_fetch = async (norad_list) => {
	console.log(norad_list);
	let sat_res = [];
	for (let i = 0; i < norad_list.length; i++) {
		const curr_norad = norad_list[i];
		if (isValidNorad(curr_norad) === false) {
			continue;
		}
		console.log(curr_norad);
		let data = await fetch_sat_data_from_api(curr_norad);
		if (data == undefined) {
			console.log("SATELITE NOT FOUND, NORAD: ", curr_norad);
			continue;
		}
		sat_res.push({ ...data });
	}
	return sat_res;
};

const sat_result_destructuring = async (data) => {
	const sats = {};
	for (const sat of data) {
		sat.positions.forEach((pos) => {
			if (!sats[pos.timestamp]) sats[pos.timestamp] = [];

			const s = {
				satname: sat.info.satname,
				satid: sat.info.satid,
				positions: {
					lat: pos.satlatitude,
					lon: pos.satlongitude,
				},
			};

			sats[pos.timestamp].push(s);
		});
	}

	// console.log(sats);

	return sats;
};
router.use("/", async (req, res) => {
	try {
		let data = await multiple_sat_fetch(norad_list);
		let dz = await sat_result_destructuring(data, NUMBER_OF_POSITIONS);
		fs.writeFileSync("./fullData.json", JSON.stringify(data), null, 4);
		fs.writeFileSync("./CuratedData.json", JSON.stringify(dz), null, 4);
		res.send(data);
	} catch (error) {
		console.log(error);
	}
});

async function fetchData() {
	try {
		let rawData = await multiple_sat_fetch(norad_list);
		let curatedData = await sat_result_destructuring(
			rawData,
			NUMBER_OF_POSITIONS,
		);
		// fs.writeFileSync("./fullData.json", JSON.stringify(data), null, 4);
		fs.writeFileSync(
			"./fullData.json",
			JSON.stringify(curatedData),
			null,
			4,
		);
		return curatedData;
	} catch (error) {
		console.log(error);
	}
}

module.exports = fetchData;
