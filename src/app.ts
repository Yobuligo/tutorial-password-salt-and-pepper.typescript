import { Client } from "./client/Client";
import { Server } from "./server/Server";

// simulate the client
const server = new Server();

const client = new Client(server, "phoffmann", "test");

client.login();
client.register();
try {
  client.register();
} catch (error) {
  console.log(error);
}
client.login();
