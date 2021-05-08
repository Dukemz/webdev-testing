const express = require('express');
const app = express();
const config = require('./config.json');

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello world, from NovoBot!');
});

// server starts listening the `PORT`
app.listen(config.port, () => {
  console.log(`Server running, now go catch it`);
});