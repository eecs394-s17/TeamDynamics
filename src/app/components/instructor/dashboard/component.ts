import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { AssignmentsService } from '../../../services/assignments.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class InstructorDashboardComponent implements OnInit {

  public forms;
  public assignments;

  constructor (public formsService: FormsService,
    public assignmentsService: AssignmentsService,
    public router: Router) {}

  ngOnInit(): void {

    this.assignmentsService.allAssignments().first().subscribe(snapshot => {
      this.assignments = snapshot.reverse();
      console.log(this.assignments);
    });

    this.formsService.allForms().first().subscribe(snapshot => {
      this.forms = {};
      for (var i = 0; i < snapshot.length; i++) {
        let key = snapshot[i].$key;
        this.forms[key] = snapshot[i];
      }
      console.log(this.forms);
    });
  };

  openForm(form) {
    this.router.navigate(['/instructor/review-form', form.$key]);
  }

  downloadCsv(){
    var data = [];
    this.formsService.allForms().subscribe((snapshot) => {
      // new Angular2Csv(snapshot, snapshot);
      for(var i = 0; i < snapshot.length; i ++){

        var snap = snapshot[i];
        data.push(['Assignment Name' + snap.assignmentName]);
        data.push([]);
        data.push(['Reviewer Name' + snap.reviewerName]);
        for(var j = 0; j < snap.individualBetBearForms.length; j ++){
          var temp = snap.individualBetBearForms[j];
          var bears = temp.bears;
          var bets = temp.bets;
          for(var bear = 0; bear < bears.length; bear ++){
            data.push(['Reviewee Name: ' + temp.revieweeName, 'Bear:', 'Alternative: ' + bears[bear].alternative, 'Behavior: ' + bears[bear].behavior, 'Effect: ' + bears[bear].effect, 'Result: ' + bears[bear].result]);
          }
          for(var bet = 0; bet < bets.length; bet ++){
            data.push(['Reviewee Name: ' + temp.revieweeName, 'Bear:', 'Behavior: ' + bets[bet].behavior, 'Effect: ' + bets[bet].effect, 'Thank you: ' + bets[bet].thankYou]);
          }
        }
        data.push([]);
        data.push([]);
      }
      new Angular2Csv(data, 'test');
    });

    // var data = [
    //   ['mid quarter'],
    //   [],
    //   ['kevin'],
    //   ['bet:tina', 'a', 'b', 'c'],
    //   ['bear:tina', 'a', 'b', 'c', 'd']
    // ];
  }
}
