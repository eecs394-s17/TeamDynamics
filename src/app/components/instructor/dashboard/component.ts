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

  download(){
    this.formsService.allForms().subscribe((snapshot) => {
      // new Angular2Csv(snapshot, snapshot);
      console.log(snapshot);
    });
  }
}
