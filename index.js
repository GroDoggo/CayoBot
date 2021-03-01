const fs = require("fs");
const cayoBot = require("./dependencies/calculaBot/cayoBot.js");

var tokenC = fs.readFileSync('tokenCayoBot.txt', 'utf8');

cayoBot.login(tokenC);