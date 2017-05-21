import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../services/forms.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-fac-view-forms',
  templateUrl: './fac-view-forms.component.html',
  styleUrls: ['./fac-view-forms.component.css']
})
export class FacViewFormsComponent implements OnInit {

  public forms: FirebaseListObservable<any>
  constructor (public formsService: FormsService) {}

  ngOnInit(): void {
    this.forms = this.formsService.allForms();
  }
}
