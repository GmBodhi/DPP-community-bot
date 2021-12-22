import dotenv from "dotenv";
import { readdirSync } from "fs";
import { resolve } from "path";
import { Bot } from "./utils/bot";
import { prefix } from "./utils/config";
dotenv.config();

const client = new Bot();

readdirSync(resolve(__dirname, "./commands"))
  .filter((f) => f.endsWith(".js"))
  .forEach(async (file) => {
    const cmd = await import("./commands/" + file);
    client.commands.set(cmd.default?.name ?? cmd.name, cmd.default ?? cmd);

  });

client.once("ready", () => {
  console.log("Logged in as", client.user?.tag);
});

client.on("messageCreate", (msg) => {
  if (
    msg.author.bot ||
    msg.channel.type === "DM" ||
    !msg.content.startsWith(prefix)
  )
    return;

  const args = msg.content.toLowerCase().slice(prefix.length).split(/\s+/g);
  const command = args.shift();
  

  client.commands
    .get(command as string)
    ?.execute({ client, message: msg, options: args });
});

client.login(process.env.TOKEN);
