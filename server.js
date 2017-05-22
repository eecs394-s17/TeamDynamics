const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const csv = require('fast-csv');
const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);
var flag = false;
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.all('/post', (req, res) => {
  req.pipe(csv())
  .on('error',function(err){
		console.error('error', err);
	})
	.on('data',function(data){
		console.log(data);
	});
  res.send('test');
});
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
