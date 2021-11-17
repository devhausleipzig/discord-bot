// This line MUST be first, for discord.js to read the process envs!
require('dotenv').config();
const { Client, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

let botAvatar, timeout;

//const victimID = '665658548956561441'; //simon
const victimID = '305765240942100480'; //taylor

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", message => {
  console.log(message)
  //if (message.content.indexOf(process.env.PREFIX) !== 0) return;

  if (message.author.id == victimID && !message.author.bot) {

    let partial = message.content
      .match(/(?:^|\s)(?:im|i'm|i am)((?: (?:\w+(?:'(?:re|[tdms]))?)){1,4})/i);

    if ( partial ) {
        partial = partial[1]
        partial = partial.trim();
        message.channel.send({content: `Hi *${partial}*, I'm dad.`});
      }

    }

});

client.login(process.env.DISCORD_TOKEN);

setInterval(() => {
  console.log("Worker still running.");
}, 600000);
