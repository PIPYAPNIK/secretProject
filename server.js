const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const allowCrossDomain = function (req, res, next) {
  const origin = req.get('origin');
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT);
