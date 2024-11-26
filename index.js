/*
© Codigo creado por la PolloGang discord.gg/pollogang
Queda Totalmente Prohibida la Distribucion de este codigo
*/

const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: 3276799,
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./Handlers/eventHandler");
const { loadbButtons } = require("./Handlers/buttonHandler");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
client.buttons = new Collection();

loadEvents(client);
loadbButtons(client);

// Cargamos el Anti-Crash
require("./Handlers/anti-crash.js")(client);

// Logueamos el cliente mediante su respectivo token
client.login(client.config.token);
