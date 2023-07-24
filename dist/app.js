"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./client/Client");
const Server_1 = require("./server/Server");
// simulate the client
const server = new Server_1.Server();
const client = new Client_1.Client(server, "phoffmann", "test");
client.login();
client.register();
try {
    client.register();
}
catch (error) {
    console.log(error);
}
client.login();
//# sourceMappingURL=app.js.map