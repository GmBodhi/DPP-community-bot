import {
  ApplicationCommandOption,
  Client,
  CommandInteraction,
  Message,
} from "discord.js";

export interface Command {
  name: string;
  description: string;
  options: ApplicationCommandOption[];
  execute: (opts: {
    client: Client;
    message?: Message;
    interaction?: CommandInteraction;
    options?: string[]
  }) => Promise<unknown> | unknown | void;
}
