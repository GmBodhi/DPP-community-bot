import { Command } from "../utils/types";

export default {
  name: "ping",
  description: "Shows the ping of the bot..!",
  execute: ({ client, message }) => {
    message?.channel.send(`Pong! ${client.ws.ping}ms`);
  },
} as Command;
