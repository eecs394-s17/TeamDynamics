import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { UsersService } from '../../../services/users.service';
import { FirebaseListObservable } from 'angularfire2/database';

import { Router } from '@angular/router';

@Component ({
  selector: 'app-student-dashboard',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})

export class StudentDashboardComponent implements OnInit {
  public userForms;

  constructor (public usersService: UsersService,
    public formsService: FormsService,
    private router: Router) {}

  ngOnInit(): void {
    this.formsService.formsByUserId(this.usersService.userId).first().subscribe(snapshot => {
      snapshot.sort((a,b) => {
        return a.endDate - b.endDate;
      });
      this.userForms = snapshot;
    })
  }

  openForm(form) {
    this.router.navigate(['/student/bet-bear-form', form.$key]);
  }

  viewFeedback() {
    this.router.navigate(['/student/feedback-list']);
  }
}
