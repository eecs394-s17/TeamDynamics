import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { UsersService } from '../../../services/users.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FeedbackService } from '../../../services/feedback.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component ({
  selector: 'app-student-feedback-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})

export class StudentFeedbackListComponent implements OnInit {
  public feedbackForms: FirebaseListObservable<any>;

  constructor (public usersService: UsersService,
    public formsService: FormsService,
    private router: Router,
    private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.feedbackForms = this.feedbackService.getFeedback(this.usersService.userId);
  }

  openFeedback(form) {
    this.router.navigate(['/student/feedback', form.$key]);
  }

  downloadCsv(){
    this.feedbackService.getFeedback(this.usersService.userId).first().subscribe((snapshot) => {
        var data = [];
        console.log(snapshot);
        for (var i = 0; i < snapshot.length; i++) {
          var assignment = snapshot[i];
          data.push(['Assignment',assignment.assignmentName]);
          if (assignment.bears) {
            data.push(['bears']);
            for (var bearId in assignment.bears) {
              if (assignment.bears.hasOwnProperty(bearId)) {
                var bear = assignment.bears[bearId];
                data.push([
                  'behavior: ' + bear.behavior,
                  'effect: ' + bear.effect,
                  'alternative: ' + bear.alternative,
                  'result: ' + bear.result
                ]);
              }
            }
          }
          if (assignment.bets) {
            data.push(['bets']);
            for (var betId in assignment.bets) {
              if (assignment.bets.hasOwnProperty(betId)) {
                var bet = assignment.bets[betId];
                data.push([
                  'assignment: ' +  name,
                  'behavior: ' + bet.behavior,
                  'effect: ' + bet.effect,
                  'thank you: ' + bet.thankYou
                ]);
              }
            }
          }
        }
        new Angular2Csv(data, 'Bet/Bear Feedback ' + String(this.usersService.userId));
    });

  }
}
