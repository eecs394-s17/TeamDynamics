var firebase = require('firebase');
var apiKey = {
  apiKey: "AIzaSyBK9oDxPMJmIDppC1ANxU4D1toYeVJhjz8",
  authDomain: "teamdynamics-7eb6e.firebaseapp.com",
  databaseURL: "https://teamdynamics-7eb6e.firebaseio.com",
  projectId: "teamdynamics-7eb6e",
  storageBucket: "teamdynamics-7eb6e.appspot.com",
  messagingSenderId: "492232390108"
};
firebase.initializeApp(apiKey);


exports.showvalue = function(){
  var db = firebase.app().database().ref('/users');
  db.once('value').then((snap) => {
   console.log(snap.val());
  });
};

exports.CreateActivity = function(students){
  console.log('in create activity');
  console.log(students);
  var teams = {};
  for (var i = 0; i < students.length; i++) {
    var teamKey = students[i][3];
    if (teams.hasOwnProperty(teamKey)) {
        teams[teamKey].push(students[i]);
    } else {
      teams[teamKey] = [students[i]];
    }
  }
  var db = firebase.app().database().ref('/forms');
  for (var teamKey in teams) {
    if (teams.hasOwnProperty(teamKey)) {
      var team = teams[teamKey];
      for (var i = 0; i < team.length; i++) {
        var form = {
          'status': 0,
          'reviewerName': team[i][1],
          'reviewerId': emailKey(team[i][2]),
          'individualBetBearForms': []
        };
        for (var j = 0; j < team.length; j++) {
          if (i == j) {
            continue;
          }
          else {
            var individualForm = {
              'revieweeName': team[j][1],
              'revieweeId': emailKey(team[j][2])
            };
            addBetsBears(individualForm);
            form.individualBetBearForms.push(individualForm);
          }
        }
        db.push(form);
      }
    }
  }
};

exports.CreateStudents = function(data) {
    var key = emailKey(data[2]);
    var db = firebase.app().database().ref('/users/' + key);
    db.once('value').then((snap) => {
      if(snap.val()){
        console.log(snap.val());
      }
      else{
        var user = {
          'ID' : data[0],
          'Name' : data[1],
          'permission': 1
        };
        db.set(user);
      }
    });
}

function emailKey(s) {
  return encodeURIComponent(s).split('.').join('%2e');
}

function addBetsBears(form) {
  form.bets=[]; form.bears = [];
  for (var i = 0; i < 2; i++ ) {
    form.bets.push({
      'behavior': "",
      'effect': "",
      'thankYou': ""
    });
    form.bears.push({
      'behavior': "",
      'effect': "",
      'alternative': "",
      'result': ""
    });
  }
}
