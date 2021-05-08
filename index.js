// Just some testing for something I'm going to make in the future. - Dukemz

const fs = require('fs');
const express = require('express');
const app = express();
const http = require("http").createServer(app);
const readline = require('readline');
// const io = require("socket.io")(http);

require('dotenv').config();
const config = require('./config.json');
// serve images, CSS files, and JavaScript files in a directory named public:
var test = app.use(express.static("public"));

app.get('*', function(req, res) {
  const ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : req.ip;
  console.log(`GET request to [${req.url}] from ${ip}`);
  // if(config.forbidden.some(v => req.url.includes(v))) {
  //   console.log(403)
  //   return res.status(403).redirect("/error.html?err=403");
  // }
  // if(!fs.existsSync(req.url)) {
  //   console.log(404)
  //   return res.status(404).redirect("/error.html?err=404");
  // }
  // res.sendFile(__dirname + req.url);

});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
rl.on('line', function(line) {
  try {
    console.log(eval(line));
  } catch(err) {
    console.error(err);
  }
});

http.listen(config.port, () => {
  console.log(`Server online - listening on port ${config.port}.`);
});
