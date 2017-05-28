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
    public feedService : FeedbackService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.formsService.formsByUserId(this.usersService.userId).first().subscribe(snapshot => {
      snapshot.sort((a,b) => {
        return a.endDate - b.endDate;
      });
      this.userForms = snapshot;
    })
  }

  downloadCsv(){
    this.feedService.getFeedBack(this.usersService.userId).subscribe((snapshot) => {
        //this.csvformat(snapshot);
        console.log(snapshot);
        new Angular2Csv(snapshot, this.usersService.userId);
    });

  }

  openForm(form) {
    this.router.navigate(['/student/bet-bear-form', form.$key]);
  }

  viewFeedback() {
    this.router.navigate(['/student/feedback-list']);
  }

}
