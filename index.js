const express = require('express');
const app = express();

// server port configuration
const PORT = 8080;

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello dev.to!');
});

// server starts listening the `PORT`
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});