// let key = '9faecf21-a17b-44b8-9038-2aad4c0a773f';

// Coding Train -------------------------------------> 
const express = require('express');
const Datastore = require('nedb');
const { response } = require('express');

const app = express();
// const fetch = require('node-fetch');
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
  database.find({}, (err, data) => {  // empty braces to find all, callback 
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  }) 
});



app.post('/api', (request, response) => {
  console.log('I got a request!');
  console.log(request.body);
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
  // {
  //   status: 'success',
  //   timestamp: timestamp,
  //   latitude: data.lat,
  //   longitude: data.lon
  // }
});


// <-------------------------------------  Coding Train

// prepData('https://api.covid19api.com/summary')
// .then(resData => {
//   prepMapChart('#map', resData).then(handleMapUpdate)
// })git stat