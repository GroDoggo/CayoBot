const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`[CayoBot] : Logged in as ${client.user.tag}!`);
    //client.user.setActivity(`des chiffres (max : ${best})`, { type: "WATCHING" })
});

client.on('message', msg => {
    
})

const login = (token) => {
    client.login(token);
};

exports.login = login