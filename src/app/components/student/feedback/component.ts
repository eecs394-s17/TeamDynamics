import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { FeedbackService } from '../../../services/feedback.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class StudentFeedbackComponent implements OnInit {
  public feedback

  constructor (private feedbackService: FeedbackService,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.feedbackService.getFeedback(this.usersService.userId).subscribe(snapshot => {
          for(var i = 0; i < snapshot.length; i++){
            if (snapshot[i].$key == params['id']) {
              var bets = [];
              var bears = [];
              if (snapshot[i].bears) {
                for (var key in snapshot[i].bears) {
                  if (snapshot[i].bears.hasOwnProperty(key)) {
                    bears.push(snapshot[i].bears[key]);
                  }
                }
              }
              if (snapshot[i].bets) {
                for (var key in snapshot[i].bets) {
                  if (snapshot[i].bets.hasOwnProperty(key)) {
                    bets.push(snapshot[i].bets[key]);
                  }
                }
              }
              this.feedback = snapshot[i];
              this.feedback['bears'] = bears;
              this.feedback['bets'] = bets;
              console.log(this.feedback);
            } 
          }
        });
        
      })
  }

}
