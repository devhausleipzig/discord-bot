// This line MUST be first, for discord.js to read the process envs!
require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
let botAvatar, timeout;
//const victimID = '227127395268820992'; //simon
//const victimID = '305765240942100480'; //taylor
const victimID = '227127395268820992' //franz

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {

  //if (message.content.indexOf(process.env.PREFIX) !== 0) return;

  if (message.author.id == victimID && !message.author.bot) {

    const partial = message.content
      .match(/(?:im|i'm|i am)((?: (?:\w+(?:'(?:re|[tdms]))?)){1,4})/i)[1]
      .trim();

    if ( partial ) {
        message.channel.send(`Hi *${partial}*, I'm dad.`);
      }

    }

});

client.login(process.env.DISCORD_TOKEN);

setInterval(() => {
  console.log("Worker still running.");
}, 600000);
