const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get('https://www.metaweather.com/api/location/8775/')
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000);
