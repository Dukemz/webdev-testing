const express = require('express');
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

app.get('*', function(req, res) {
  const ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : req.ip;
  console.log(`GET request to [${req.url}] from ${ip}`)
  // if(req.url.includes('package') || req.url.includes('node_modules')) return res.status().send("haha no.");
  if(config.forbidden.some(v => req.url.includes(v))) return res.sendFile(__dirname + "error.html?err=403");
  res.sendFile(__dirname + req.url);
});

http.listen(3000, () => {
  console.log("Server online - listening on port 3000.");
});
