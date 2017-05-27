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


exports.CreateActivity = function(students){
  console.log('in create activity');
  console.log(students);
  var teams = {};
  var uniqueIds = [];
  sdate = students[0][1];
  console.log(sdate);
  edate = students[0][2];
  assignmentname = students[0][0];
  for (var i = 2; i < students.length; i++) {
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
          'individualBetBearForms': [],
          'startDate' : sdate,
          'endDate' : edate,
          'assignmentName' : assignmentname,
          'assignmentId' : ''
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
        var ref = db.push(form);
        uniqueIds.push(ref.getKey());
      }
    }
  }
  var assignment = {
    'name' : assignmentname,
    'startDate' : sdate,
    'endDate' : edate,
    'forms' : uniqueIds
  };
  assignmentid = CreateAssignment(assignment);
  UpdateAssignmentId(assignmentid, uniqueIds);
  for(var i = 2; i < students.length; i ++){
    var key = emailKey(students[i][2]);
    CreateFeedback(key, assignmentid, assignmentname);
  }

};

function CreateAssignment(assignment){
  var db = firebase.app().database().ref('/assignments/');
  var ref = db.push(assignment);
  return ref.getKey();
}

function UpdateAssignmentId(assignmentid, ids){
  for(var i = 0; i < ids.length; i ++){
    var db = firebase.app().database().ref('/forms/' + ids[i]);
    var temp = {};
    db.once('value').then((data) => {
      temp = data.val();
    });
    temp.assignmentId = assignmentid;
    db.update(temp);
  }
}

function CreateFeedback(userId, assignmentid, assignmentname){
  var db = firebase.app().database().ref('/feedback/' + userId + '/' + assignmentid);
  var feedback = {
      'assignmentName' : assignmentname,
      'bets' : [],
      'bears' : []
  };
  db.set(feedback);
}


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
