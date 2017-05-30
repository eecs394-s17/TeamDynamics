import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { UsersService } from '../../../services/users.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FeedbackService } from '../../../services/feedback.service';

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
}
