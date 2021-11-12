const express = require('express');
const serve  = require('express-static');
const app = express();
const axios = require('axios');

app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get('https://www.metaweather.com/api/location/8775/')
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
});

app.use(serve(__dirname + '/public'));

app.listen(3000);
