const fetchRawData = require("./fetcher");

const timeStampArrayBuilder = (timestamp, rawData) => {
	const data = [];

	for (const sat of rawData) {
	}
};

async function cleaner() {
	const rawData = await fetchRawData();
	const cleanData = [];
	console.log(JSON.stringify(rawData));
	// The time window is basically the start postion of a satelite and the
	const timeWindow = [];
	timeWindow.push(rawData[0].positions[0].timestamp);
	timeWindow.push(
		rawData[0].positions[rawData[0].positions.length - 1].timestamp,
	);

	for (let i = 0; i < rawData.length; i++) {
		const sat = rawData[i];
	}

	for (let x = 0; x < rawData[0].positions.length; x++) {
		const firstSatPos = rawData[0].positions[x];
		const timestamp = firstSatPos.timestamp;
	}
}

cleaner();
