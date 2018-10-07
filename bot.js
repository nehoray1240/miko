const discord = require("discord.js");
const TOKEN = ("NDk4NTI4OTQzMjM0NzQ0MzUx.DpvPUA.lRnam7OHpuGZrSS4n0HeTmmz4Gg");
var bot = new discord.Client();
bot.on("ready", function () {
    console.log('G4E is online!');
});

bot.on("message", async message => {
    bot.user.setActivity(`MIKO`, { type: "PLAYING" });
    if(message.content === '<@390246455052337152>     LOVE'){
        message.channel.send('<@390246455052337152>     MIKO')
    }
   
});

bot.login(TOKEN);
