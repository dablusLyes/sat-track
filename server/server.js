const app = require("express")();
const path = require("path");
const bodyParser = require("body-parser");
const dataFetcher = require("./fetcher");
const WebSocket = require("ws");

const PORT = "3001";

const wss = new WebSocket.Server({ server: app });

const clients = new Set();

wss.on("connection", (ws) => {
	console.log("Client connected");
	clients.add(ws);

	ws.on("message", (message) => {
		console.log(`Received: ${message}`);
	});

	ws.on("close", () => {
		console.log("Client disconnected");
		clients.delete(ws);
	});
});

app.use("/", dataFetcher);

app.listen(PORT, () => {
	console.log("listening on http://localhost:" + PORT);
});
