import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../services/forms.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-fac-view-forms',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class InstructorViewFormsComponent implements OnInit {

  public forms: FirebaseListObservable<any>
  constructor (public formsService: FormsService) {}

  ngOnInit(): void {
    this.forms = this.formsService.allForms();
  }
}
