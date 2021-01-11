const express = require('express');
const path = require('path');

const app = express();
const port = 4444;

app.use(express.static(path.join(__dirname, 'web')));

app.listen(port, () => {
  console.log(`App is running at localhost:${port}...`)
});
