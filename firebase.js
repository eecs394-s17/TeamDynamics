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

exports.CreateActivity = function(data){
  var email = data[2];
  email = email.replace(/\./g, '%40');
  var db = firebase.app().database().ref('/users/' + email);
  db.once('value').then((snap) => {
    if(snap.val()){
      console.log(snap.val());
    }
    else{
      var user = {
        'ID' : data[0],
        'Name' : data[1],
        'Email' : data[2],
        'Team' : data[3]
      };
      db.set(user);
    }
  })

};
