import { Client, Intents } from "discord.js";
import { Command } from "./types";

export class Bot extends Client {
  commands: Map<string, Command>;
  constructor() {
    super({
      intents: Object.values(Intents.FLAGS),
    });

    this.commands = new Map<string, Command>();
  }
}
