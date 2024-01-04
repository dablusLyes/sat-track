const app = require("express")();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const httpServer = require("http").createServer(app);
const fetchData = require("./fetcher");
const { log } = require("console");

const PORT = "3001";
const io = require("socket.io")(PORT, {
	cors: {
		origin: ["http://localhost:3000"],
	},
});
const DATA_REFRESH_INTERVAL = 100000; //refresh the data every 100sec

io.on("connection", (socket) => {
	console.log("new socket connection", socket.id);
});

// fetchData().then((broadcastData) => {
// 	io.emit("satPosition", broadcastData);
// 	console.log("Data emitted first time");

// 	setInterval(() => {
// 		io.emit("satPosition", broadcastData);
// 		console.log("Data emitted");
// 	}, DATA_REFRESH_INTERVAL);
// });
const dataStack = [];

fetchData().then((data) => {});
