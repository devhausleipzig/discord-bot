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

    timeout = 0;
    const imageurl = message.author.displayAvatarURL()
    botAvatar = client.user.avatarURL();
    if ( botAvatar !== imageurl ) {
      client.user.setAvatar(imageurl).catch( (err) => { return } );
      timeout = 500;
    }

    const partial = message.content.match(/(?:im|i'm|i am)((?: \w+){1,4})/i)[1].trim();
    if ( partial ) {
      const sendMessage = () => {
        message.channel.send(`Hi *${partial}*, I'm dad.`);
      };
      setTimeout(sendMessage, timeout)
    }

  }
});

client.login(process.env.DISCORD_TOKEN);
