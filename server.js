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
// app.get('/download', (req, res) => {
//   firebase.GetInfo((snapshot) => {
//       var data = csv.createWriteStream("test.csv");
//       csv
//       .write(snapshot)
//       .pipe(data);
//       console.log(data);
//       res.send(snapshot);
//   });
//
// });

app.all('/post', (req, res) => {
  var count = 0;
  var students = [];
  var assignmentInfo;
  req.pipe(csv())
  .on('error',function(err){
    console.error('error', err);
  })
  .on('data',function(data){
    if(count == 5 && data.length > 1) {
      assignmentInfo = data;
    }
    else if(count > 6 && data.length > 1) {
      students.push(data);
      firebase.CreateStudents(data);
    }
    count++;
  })
  .on('end', _=> {
    firebase.CreateActivity(assignmentInfo, students);
   });
  res.send('');
});

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
