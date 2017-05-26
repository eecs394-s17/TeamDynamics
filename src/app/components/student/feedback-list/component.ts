import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { UsersService } from '../../../services/users.service';
import { FirebaseListObservable } from 'angularfire2/database';

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
    private router: Router) {}

  ngOnInit(): void {
    this.usersService.user.subscribe(snapshot => {
      this.feedbackForms = this.formsService.formsByUserId(snapshot.uid);
    });
  }

  openFeedback() {
    this.router.navigate(['/student/feedback']);
  }
}
