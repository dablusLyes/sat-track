const CONFIG = require("../config");
console.log(CONFIG.SERVER.PORT);
const DATA_REFRESH_INTERVAL = (CONFIG.SERVER.SAT_POSITIONS - 10) * 1000; //refresh the data every 100sec
const fetchData = require("./fetcher");
const PORT = CONFIG.SERVER.PORT;
const io = require("socket.io")(PORT, {
	cors: {
		origin: ["http://localhost:3000"],
	},
});
let numberOfConnexions = 0;
io.on("connection", (socket) => {
	console.log("new socket connection", socket.id);
	numberOfConnexions++;
});
io.on("disconnect", () => {
	numberOfConnexions--;
	console.log(`Connected clients: ${numberOfConnexions}`);
});

let dataStack = {};

fetchData()
	.then((data) => {
		dataStack = { ...data };
		setInterval(() => {
			fetchData().then((data) => {
				dataStack = { ...data };
			});
		}, DATA_REFRESH_INTERVAL);
	})
	.finally(() => {
		setInterval(() => {
			const currentDate = new Date();
			const currentTimeStamp = Math.ceil(currentDate.getTime() / 1000);
			// console.log("satPosition", dataStack[currentTimeStamp]);
			console.log(
				"Emitted this timestamp",
				currentTimeStamp,
				"  :  ",
				Object.keys(dataStack).length,
			);
			io.emit("satPosition", dataStack[currentTimeStamp]);
			delete dataStack[currentTimeStamp];
		}, 1000);
	});
