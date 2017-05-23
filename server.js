const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const csv = require('fast-csv');
const api = require('./server/routes/api');
var firebase = require('./firebase.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.all('/post', (req, res) => {
  var count = 0;
  req.pipe(csv())
  .on('error',function(err){
    console.error('error', err);
  })
  .on('data',function(data){
    count ++;
    if(count > 5 && data.length > 1) firebase.CreateActivity(data);
  });
  res.send('test');
});

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
