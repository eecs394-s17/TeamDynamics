import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { FeedbackService } from '../../../services/feedback.service';
import { UsersService } from '../../../services/users.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component ({
  selector: 'app-student-dashboard',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})

export class StudentDashboardComponent implements OnInit {
  public userForms;
  public download;
  constructor (public usersService: UsersService,
    public formsService: FormsService,
    public feedbackService : FeedbackService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.formsService.formsByUserId(this.usersService.userId).first().subscribe(snapshot => {
      snapshot.sort((a,b) => {
        return b.endDate - a.endDate;
      });
      this.userForms = snapshot;
    })
  }

  downloadCsv(){
    this.feedbackService.getFeedback(this.usersService.userId).subscribe((snapshot) => {
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

  openForm(form) {
    this.router.navigate(['/student/bet-bear-form', form.$key]);
  }

  viewFeedback() {
    this.router.navigate(['/student/feedback-list']);
  }

}
