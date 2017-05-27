import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class InstructorDashboardComponent implements OnInit {

  public forms: FirebaseListObservable<any>
  constructor (public formsService: FormsService,
    public router: Router) {}

  ngOnInit(): void {
    this.forms = this.formsService.allForms();
  }

  openForm(form) {
    this.router.navigate(['/instructor/review-form', form.$key]);
  }
}
