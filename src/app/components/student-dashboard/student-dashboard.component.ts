import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../services/forms.service';
import { UsersService } from '../../services/users.service';
import { FirebaseListObservable } from 'angularfire2/database';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component ({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})

export class StudentDashboardComponent implements OnInit {
  public userForms: FirebaseListObservable<any>;

  constructor (public usersService: UsersService,
    public formsService: FormsService,
    private router: Router) {}

  ngOnInit(): void {
    this.usersService.user.subscribe(snapshot => {
      this.userForms = this.formsService.formsByUserId(snapshot.uid);
    });
  }

  openForm(form) {
    this.router.navigate(['/bet-bear-form', form.$key]);
  }

  newForm() {
    this.router.navigate(['/bet-bear-form']);
  }
}
