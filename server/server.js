const app = require("express")();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const dataFetcher = require("./fetcher");
const httpServer = require("http").createServer(app);
const PORT = "3001";
const io = require("socket.io")(PORT, {
	cors: {
		origin: ["http://localhost:3000"],
	},
});

io.on("connection", (socket) => {
	console.log("new socket connection", socket.id);
});

setInterval(() => {
	io.emit("satPosition", "position of sat => zebi");
	console.log("n7eb javascript ");
}, 1000);
